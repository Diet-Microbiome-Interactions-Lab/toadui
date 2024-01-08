import type { Actions } from "../$types";

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log(`Action found the following form data: ${data.get("lab")}`);
  },

  grabData: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log(`Action found the following form data: ${data.get("lab")}`);
  },
};
