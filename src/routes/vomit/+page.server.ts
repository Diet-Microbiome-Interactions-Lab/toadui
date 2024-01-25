import { ampliconFasta } from "$lib/stores/AmpliconStores";
import type { Actions } from "../$types";
import { GET } from "$lib/ApiCaller";

export const actions: Actions = {
  //   default: async ({ cookies, request }) => {
  //     const data = await request.formData();
  //     console.log(`Action found the following form data: ${data.get("lab")}`);
  //   },

  grabData: async ({ cookies, request }) => {
    const data = await request.formData();

    const response = await fetch("http://localhost:5173/api/fastas");
    const items = await response.json();
    ampliconFasta.set(items);
    // Fetch data and then update a store to that value
    console.log(
      `[+page.server.ts]: Action (grabData) loaded in ~/api/fastas items`
    );
    return { grabData: items };
  },
};
