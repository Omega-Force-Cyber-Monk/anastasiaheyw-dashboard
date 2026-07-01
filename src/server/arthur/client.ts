import { db } from "~/server/db";
import { env } from "~/env";

export interface ArthurTokenData {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

/**
 * Save or update the Arthur OAuth token in the database.
 */
export async function saveArthurToken(
  accessToken: string,
  refreshToken: string,
  expiresInSeconds: number
) {
  const expiresAt = new Date(Date.now() + expiresInSeconds * 1000);

  return await db.arthurToken.upsert({
    where: { id: "singleton" },
    update: {
      accessToken,
      refreshToken,
      expiresAt,
    },
    create: {
      id: "singleton",
      accessToken,
      refreshToken,
      expiresAt,
    },
  });
}

/**
 * Retrieve the active Arthur OAuth token, refreshing it if it has expired.
 */
export async function getArthurToken(): Promise<string> {
  const tokenRecord = await db.arthurToken.findUnique({
    where: { id: "singleton" },
  });

  if (!tokenRecord) {
    throw new Error("Arthur Online integration is not linked. Please connect Arthur Online in Settings.");
  }

  const now = new Date();
  // If token is expired or expires in the next 30 seconds, refresh it
  if (tokenRecord.expiresAt.getTime() - now.getTime() < 30000) {
    return await refreshArthurToken(tokenRecord.refreshToken);
  }

  return tokenRecord.accessToken;
}

/**
 * Exchange a refresh token for a new access token.
 */
async function refreshArthurToken(refreshToken: string): Promise<string> {
  console.log("Refreshing Arthur OAuth token...");
  const response = await fetch("https://system.arthuronline.co.uk/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: env.ARTHUR_CLIENT_ID,
      client_secret: env.ARTHUR_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Failed to refresh Arthur token:", errorText);
    throw new Error(`Arthur token refresh failed: ${response.status} - ${errorText}`);
  }

  const data = (await response.json()) as {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  };

  await saveArthurToken(data.access_token, data.refresh_token, data.expires_in);
  return data.access_token;
}

/**
 * Utility function to request Arthur Online API
 */
export async function arthurFetch(endpoint: string, options: RequestInit = {}) {
  const token = await getArthurToken();

  if (token === "mock_access_token") {
    console.log(`[Developer Simulation] Mocking Arthur API endpoint: ${endpoint}`);
    return getDeveloperMockApiResponse(endpoint);
  }

  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  const url = `https://api.arthuronline.co.uk/${cleanEndpoint}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "X-EntityID": env.ARTHUR_ENTITY_ID,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Arthur API request failed: ${res.status} - ${errorText}`);
  }

  return (await res.json()) as unknown;
}

/**
 * Simulates Arthur Online API v2 endpoints response payloads for local developer testing.
 */
function getDeveloperMockApiResponse(endpoint: string) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  if (cleanEndpoint.includes("properties")) {
    return {
      data: [
        { id: 101, name: "Ashford Yard Block A", address_line_1: "Ashford Road, Eastbourne", postcode: "BN21 3UA" },
        { id: 102, name: "Jevington Yard Block J", address_line_1: "Jevington Rd, Eastbourne", postcode: "BN20 0PN" },
        { id: 103, name: "Longstone Yard Block L", address_line_1: "Longstone Rd, Eastbourne", postcode: "BN22 8LD" }
      ]
    };
  }

  if (cleanEndpoint.includes("units")) {
    return {
      data: [
        { id: 201, property_id: 101, name: "A01", unit_number: "1", status: "Occupied" },
        { id: 202, property_id: 101, name: "A02", unit_number: "2", status: "Occupied" },
        { id: 203, property_id: 101, name: "A03", unit_number: "3", status: "Vacant" },
        { id: 204, property_id: 102, name: "J01", unit_number: "1", status: "Occupied" },
        { id: 205, property_id: 102, name: "J02", unit_number: "2", status: "Occupied" },
        { id: 206, property_id: 103, name: "L01", unit_number: "1", status: "Occupied" }
      ]
    };
  }

  if (cleanEndpoint.includes("tenancies")) {
    return {
      data: [
        {
          id: 301,
          unit_id: 201,
          status: "active",
          start_date: "2025-01-01",
          end_date: "2026-01-01",
          rent_amount: "1250.00",
          deposit_amount: "1400.00",
          deposit_lodged: "Lodged with DPS",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Synced from Dynamic Arthur API. Rent is paid on the 1st of every month.",
          financial_status: "Paid up to date",
          tenant: {
            first_name: "John",
            last_name: "Doe",
            mobile_phone: "07123456789",
            email: "john.doe@example.com"
          }
        },
        {
          id: 302,
          unit_id: 202,
          status: "active",
          start_date: "2025-03-01",
          end_date: "2026-03-01",
          rent_amount: "1350.00",
          deposit_amount: "1500.00",
          deposit_lodged: "Lodged with DPS",
          deposit_received: "Received",
          letting_type: "AST ROLLING",
          notes: "Tenant swap complete. Moving in soon.",
          financial_status: "Paid up to date",
          tenant: {
            first_name: "Jane",
            last_name: "Smith",
            mobile_phone: "07987654321",
            email: "jane.smith@example.com"
          }
        },
        {
          id: 304,
          unit_id: 204,
          status: "active",
          start_date: "2024-06-15",
          end_date: "2025-06-15",
          rent_amount: "950.00",
          deposit_amount: "1100.00",
          deposit_lodged: "Lodged",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Arrears of £950. Sent warning email.",
          financial_status: "Arrears",
          tenant: {
            first_name: "David",
            last_name: "Miller",
            mobile_phone: "07456123789",
            email: "david.m@example.com"
          }
        },
        {
          id: 305,
          unit_id: 205,
          status: "active",
          start_date: "2024-09-01",
          end_date: "2025-09-01",
          rent_amount: "1100.00",
          deposit_amount: "1250.00",
          deposit_lodged: "Lodged",
          deposit_received: "Received",
          letting_type: "AST ROLLING",
          notes: "No issues reported.",
          financial_status: "Paid up to date",
          tenant: {
            first_name: "Sarah",
            last_name: "Connor",
            mobile_phone: "07852369147",
            email: "sarah.c@example.com"
          }
        },
        {
          id: 306,
          unit_id: 206,
          status: "active",
          start_date: "2023-12-01",
          end_date: "2024-12-01",
          rent_amount: "1500.00",
          deposit_amount: "1800.00",
          deposit_lodged: "Lodged",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Renewed agreement for 12 months.",
          financial_status: "Paid up to date",
          tenant: {
            first_name: "Robert",
            last_name: "Downey",
            mobile_phone: "07596847362",
            email: "robert.d@example.com"
          }
        }
      ]
    };
  }

  return { data: [] };
}
