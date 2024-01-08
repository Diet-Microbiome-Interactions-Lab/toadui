import { createSession, setSessionUser } from "$lib/utilities/session";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

async function getUser(email: string, password: string) {
  const endpoint = `http://127.0.0.1:5000/api/v1/users?email=${email}`;
  console.log(`Fetching user from endpoint ${endpoint}`);

  const response = await fetch(endpoint, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const user = await response.json();
  try {
    return user[0];
  } catch (error) {
    console.log("User not found");
    return false;
  }
}

export const actions: Actions = {
  login: async ({ cookies, locals, request }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");

    const session = cookies.get("session");
    console.log(`Session found: ${session}`);
    const { sessionID } = JSON.parse(session!);

    if (!session || !sessionID) {
      throw redirect(303, "/signup");
    }

    if (typeof email !== "string") {
      return fail(400, {
        email: "",
        error: "authentication",
      });
    }

    let userData = await getUser(email, password);
    let user = userData.email;
    if (!userData) {
      return fail(400, {
        email,
        error: "User Not Found",
      });
    }

    if (typeof password !== "string" || !user) {
      return fail(400, {
        email,
        error: "authentication",
      });
    }

    console.log(`User email: ${user}`);
    // const validPassword = await argon2.verify(passwordHash, password);
    const validPassword = password == userData.password;
    console.log(
      `Tested user pass (${userData.password}) against ${password} and got: ${validPassword}`
    );

    if (!validPassword) {
      console.log("Password not valid");
      return fail(400, {
        email,
        error: "authentication",
      });
    }

    // set user email on session cookie
    setSessionUser({ cookies, email, sessionID });
    console.log("Setting setSessionUser");
    throw redirect(303, "/");
  },
};
