import type { Cookies } from "@sveltejs/kit";

export function createSession(cookies: Cookies) {
  const sessionID = crypto.randomUUID();
  cookies.set("session", JSON.stringify({ sessionID }), {
    path: "/",
    expires: new Date("2024-12-31"),
    sameSite: "lax",
    httpOnly: true,
  });
}

export function setSessionUser({
  cookies,
  email,
  sessionID,
}: {
  cookies: Cookies;
  email: string;
  sessionID: string;
}) {
  cookies.set("session", JSON.stringify({ email, sessionID }), {
    path: "/",
    expires: new Date("2024-12-31"),
    sameSite: "lax",
    httpOnly: true,
  });
}
