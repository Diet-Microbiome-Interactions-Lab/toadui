import { createSession } from "../lib/utilities/session";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function load({ cookies }) {
  const session = cookies.get("session");

  if (!session) {
    console.log(`No session, so creating one`);
    createSession(cookies);
  }
  return {};
};
