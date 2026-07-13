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
  const bodyParams = new URLSearchParams({
    client_id: env.ARTHUR_CLIENT_ID,
    client_secret: env.ARTHUR_CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch("https://auth.arthuronline.co.uk/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      Accept: "application/json",
    },
    body: bodyParams.toString(),
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
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    if (errorText.includes("Just a moment...") || errorText.includes("challenges.cloudflare.com")) {
      throw new Error(`Arthur API request was challenged by Cloudflare (403 Forbidden). Re-authenticate via OAuth or verify API credentials.`);
    }
    throw new Error(`Arthur API request failed: ${res.status} - ${errorText.slice(0, 150)}`);
  }

  try {
    return (await res.json()) as unknown;
  } catch {
    throw new Error(`Arthur API response could not be parsed as JSON.`);
  }
}

/**
 * Simulates Arthur Online API v2 endpoints response payloads for local developer testing.
 */
function getDeveloperMockApiResponse(endpoint: string) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  if (cleanEndpoint.includes("properties")) {
    return {
      data: [
        { id: 101, name: "Ashford Yard", address_line_1: "145a Ashford Road, Eastbourne, East Sussex", postcode: "BN21 3UA" },
        { id: 102, name: "Jevington Yard Block J", address_line_1: "Jevington Rd, Eastbourne", postcode: "BN20 0PN" },
        { id: 103, name: "Longstone Yard Block L", address_line_1: "Longstone Rd, Eastbourne", postcode: "BN22 8LD" }
      ]
    };
  }

  if (cleanEndpoint.includes("units")) {
    return {
      data: [
        { id: 201, property_id: 101, name: "A01", unit_number: "Flat 1", status: "Occupied" },
        { id: 202, property_id: 101, name: "A02", unit_number: "Flat 2", status: "Occupied" },
        { id: 203, property_id: 101, name: "A03", unit_number: "Flat 3", status: "Occupied" },
        { id: 207, property_id: 101, name: "A04", unit_number: "Flat 4", status: "Occupied" },
        { id: 208, property_id: 101, name: "A05", unit_number: "Flat 5", status: "Occupied" },
        { id: 209, property_id: 101, name: "A06", unit_number: "Flat 6", status: "Occupied" },
        { id: 210, property_id: 101, name: "A07", unit_number: "Flat 7", status: "Occupied" },
        { id: 211, property_id: 101, name: "A08", unit_number: "Flat 8", status: "Occupied" },
        { id: 212, property_id: 101, name: "A09", unit_number: "Flat 9", status: "Occupied" },
        { id: 220, property_id: 101, name: "A10", unit_number: "Flat 10", status: "Occupied" },
        { id: 213, property_id: 101, name: "A11", unit_number: "Flat 11", status: "Occupied" },
        { id: 215, property_id: 101, name: "A12", unit_number: "Flat 12", status: "Vacant" },
        { id: 216, property_id: 101, name: "A13", unit_number: "Flat 13", status: "Occupied" },
        { id: 217, property_id: 101, name: "A14", unit_number: "Flat 14", status: "Occupied" },
        { id: 218, property_id: 101, name: "A15", unit_number: "Flat 15", status: "Occupied" },
        { id: 219, property_id: 101, name: "A16", unit_number: "Flat 16", status: "Occupied" },
        { id: 204, property_id: 102, name: "J01", unit_number: "Flat 1", status: "Occupied" },
        { id: 205, property_id: 102, name: "J02", unit_number: "Flat 2", status: "Occupied" },
        { id: 214, property_id: 102, name: "J06", unit_number: "Flat 6", status: "Occupied" },
        { id: 206, property_id: 103, name: "L01", unit_number: "Flat 1", status: "Occupied" }
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
          start_date: "2025-04-30",
          end_date: "2026-04-29",
          rent_amount: "1150.00",
          deposit_amount: "1325.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "AST ROLLING",
          notes: "Gated courtyard development, 18 apartments + 2 houses. Two-storey mews house. Rent is due on the 29th of each month by standing order.",
          financial_status: "Paid up to date",
          code: "A01-KEY",
          tenants: [
            { first_name: "Verghese", last_name: "Kurien", mobile_phone: "", email: "" },
            { first_name: "Neha", last_name: "Zacharias", mobile_phone: "", email: "neha.zacharias@email.com" }
          ]
        },
        {
          id: 302,
          unit_id: 202,
          status: "active",
          start_date: "2025-10-25",
          end_date: "2026-10-24",
          rent_amount: "1150.00",
          deposit_amount: "1325.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Tenant swap complete. Inventory needs checking.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Akshaya", last_name: "Rajagopal", mobile_phone: "07943550828", email: "akshayaraj25@yahoo.com" }
        },
        {
          id: 303,
          unit_id: 203,
          status: "active",
          start_date: "2025-03-29",
          end_date: "2026-03-28",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Keyss Hussein tenancy.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Keyss", last_name: "Hussein", mobile_phone: "07922392166", email: "keyss.alcheikh@gmail.com" }
        },
        {
          id: 307,
          unit_id: 207,
          status: "active",
          start_date: "2026-02-28",
          end_date: "2027-02-27",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Flat 4 tenancy.",
          financial_status: "Paid up to date",
          tenants: [
            { first_name: "Hikmot Adeola", last_name: "Mustapha", mobile_phone: "07928223989", email: "hikmotmustapha@gmail.com" },
            { first_name: "Saheed Olawale", last_name: "Lawal", mobile_phone: "07576323623", email: "lawalolw@gmail.com" }
          ]
        },
        {
          id: 308,
          unit_id: 208,
          status: "active",
          start_date: "2024-09-14",
          end_date: "rolling",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "11/11/2024",
          deposit_received: "Received",
          letting_type: "AST ROLLING",
          notes: "Oliver Berry & Ellie-Mae Meredith tenancy.",
          financial_status: "Paid up to date",
          tenants: [
            { first_name: "Oliver", last_name: "Berry", mobile_phone: "07479 108 080", email: "Oliverjbarry23@gmail.com" },
            { first_name: "Ellie-Mae", last_name: "Meredith", mobile_phone: "", email: "Elliemae210104@icloud.com" }
          ]
        },
        {
          id: 309,
          unit_id: 209,
          status: "active",
          start_date: "2025-12-05",
          end_date: "2026-12-04",
          rent_amount: "1150.00",
          deposit_amount: "1325.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Laetitia Stephanie Briquet tenancy. Bathroom/WC skirting RHS has water damage.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Laetitia Stephanie", last_name: "Briquet", mobile_phone: "7403322421", email: "l.briquet@live.fr" }
        },
        {
          id: 310,
          unit_id: 210,
          status: "active",
          start_date: "2025-08-30",
          end_date: "2026-08-29",
          rent_amount: "1150.00",
          deposit_amount: "1325.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Flat 7 Ashford Yard tenancy. Note rent payment reference conflict to 6 Ashford Yard.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Benjamin Caruana", last_name: "Montaldo", mobile_phone: "", email: "benjamin.c@example.com" }
        },
        {
          id: 311,
          unit_id: 211,
          status: "active",
          start_date: "2024-11-30",
          end_date: "2025-11-29",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "AST ROLLING",
          notes: "Flat 8 Ashford Yard. Accept with John Feeney as guarantor.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Maureen", last_name: "Feeney", mobile_phone: "", email: "maureen.f@example.com" }
        },
        {
          id: 312,
          unit_id: 212,
          status: "active",
          start_date: "2026-01-03",
          end_date: "2027-01-02",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Flat 9 Ashford Yard. Ground floor one-bedroom flat.",
          financial_status: "Paid up to date",
          tenants: [
            { first_name: "Wisdom Okechukwu", last_name: "Oturi", mobile_phone: "", email: "wisdom.o@example.com" },
            { first_name: "Grace", last_name: "Okechukwu", mobile_phone: "", email: "" }
          ]
        },
        {
          id: 320,
          unit_id: 220,
          status: "active",
          start_date: "2025-09-25",
          end_date: "2026-09-24",
          rent_amount: "1150.00",
          deposit_amount: "1325.00",
          deposit_lodged: "TBC",
          deposit_received: "TBC",
          letting_type: "FIXED TERM",
          notes: "",
          financial_status: "paid up to date as at 9/1/2026",
          tenant: { first_name: "Jin Un", last_name: "Kim", mobile_phone: "07401223229", email: "j.kim1992@yahoo.com" }
        },
        {
          id: 313,
          unit_id: 213,
          status: "active",
          start_date: "2024-10-10",
          end_date: "2025-10-09",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "AST ROLLING",
          notes: "Flat 11 Ashford Yard. Sprinkler system active.",
          financial_status: "Paid up to date",
          tenants: [
            { first_name: "Rachel", last_name: "Njogu", mobile_phone: "07928521149", email: "rachel.n@example.com" },
            { first_name: "Sheldon", last_name: "Williams", mobile_phone: "", email: "" }
          ]
        },
        {
          id: 316,
          unit_id: 216,
          status: "active",
          start_date: "2024-10-28",
          end_date: "2025-10-27",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "AST ROLLING",
          notes: "Flat 13 tenancy. Fixed term ended, now periodic.",
          financial_status: "Paid up to date",
          tenants: [
            { first_name: "Lily Mae", last_name: "Veness", mobile_phone: "07492491388", email: "lily.v@example.com" },
            { first_name: "Hayden Riley", last_name: "Saunders", mobile_phone: "", email: "" }
          ]
        },
        {
          id: 317,
          unit_id: 217,
          status: "active",
          start_date: "2026-03-05",
          end_date: "2026-08-04",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Flat 14 tenancy. Ground floor one-bedroom apartment.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Darshana", last_name: "Nair", mobile_phone: "07543054172", email: "darshana.n@example.com" }
        },
        {
          id: 318,
          unit_id: 218,
          status: "active",
          start_date: "2026-02-24",
          end_date: "2027-02-23",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Flat 15 tenancy. Failed references accepted with guarantor Katie Louise Astin.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Samuel Leslie", last_name: "Wies", mobile_phone: "07876743315", email: "samuel.w@example.com" }
        },
        {
          id: 319,
          unit_id: 219,
          status: "active",
          start_date: "2025-12-31",
          end_date: "2026-12-30",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Flat 16 tenancy. Unsigned TA.",
          financial_status: "Paid up to date",
          tenant: { first_name: "Marina Rodriguez", last_name: "Fernandez", mobile_phone: "+34 660972327", email: "marina.r@example.com" }
        },
        {
          id: 314,
          unit_id: 214,
          status: "active",
          start_date: "2025-05-27",
          end_date: "2026-05-26",
          rent_amount: "1100.00",
          deposit_amount: "1265.00",
          deposit_lodged: "TBC",
          deposit_received: "Received",
          letting_type: "FIXED TERM",
          notes: "Flat 6 Jevington Yard. Payments to Dinesh Hemnani.",
          financial_status: "Paid up to date",
          tenants: [
            { first_name: "Shae Julia Peggy", last_name: "Smith", mobile_phone: "", email: "shae.smith@example.com" },
            { first_name: "Reuben Alexander Ure", last_name: "Samms", mobile_phone: "", email: "" }
          ]
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
          tenant: { first_name: "David", last_name: "Miller", mobile_phone: "07456123789", email: "david.m@example.com" }
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
          tenant: { first_name: "Sarah", last_name: "Connor", mobile_phone: "07852369147", email: "sarah.c@example.com" }
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
          tenant: { first_name: "Robert", last_name: "Downey", mobile_phone: "07596847362", email: "robert.d@example.com" }
        }
      ]
    };
  }

  return { data: [] };
}
