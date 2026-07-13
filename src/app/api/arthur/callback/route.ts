import { NextResponse, type NextRequest } from "next/server";
import { saveArthurToken } from "~/server/arthur/client";
import { env } from "~/env";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  if (error) {
    console.error("Arthur OAuth Error callback:", error, errorDescription);
    return NextResponse.redirect(
      new URL(
        `/admin/settings?error=oauth_error&message=${encodeURIComponent(errorDescription ?? error)}`,
        request.url
      )
    );
  }

  if (!code) {
    return NextResponse.redirect(
      new URL("/admin/settings?error=missing_code", request.url)
    );
  }

  try {
    const bodyParams = new URLSearchParams({
      client_id: env.ARTHUR_CLIENT_ID,
      client_secret: env.ARTHUR_CLIENT_SECRET,
      redirect_uri: env.ARTHUR_REDIRECT_URI,
      code,
      grant_type: "authorization_code",
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
      console.error("Failed to exchange auth code for token:", errorText);
      return NextResponse.redirect(
        new URL(
          `/admin/settings?error=token_exchange_failed&details=${encodeURIComponent(errorText.slice(0, 100))}`,
          request.url
        )
      );
    }

    let data: { access_token: string; refresh_token: string; expires_in: number };
    try {
      data = (await response.json()) as {
        access_token: string;
        refresh_token: string;
        expires_in: number;
      };
    } catch {
      console.error("Non-JSON response received from Arthur token endpoint");
      return NextResponse.redirect(
        new URL(
          `/admin/settings?error=invalid_response_format&message=${encodeURIComponent("Arthur server returned a non-JSON response.")}`,
          request.url
        )
      );
    }

    await saveArthurToken(data.access_token, data.refresh_token, data.expires_in);

    return NextResponse.redirect(
      new URL("/admin/oauth-success", request.url)
    );
  } catch (err) {
    console.error("Error in Arthur OAuth callback handler:", err);
    const errMsg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.redirect(
      new URL(
        `/admin/settings?error=internal_callback_error&message=${encodeURIComponent(errMsg)}`,
        request.url
      )
    );
  }
}
