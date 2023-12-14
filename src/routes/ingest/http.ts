export let formdata = {};

export async function get(): Promise<any> {
  const uri = "https://127.0.0.1:5000/functions/test";
  console.log(`Get calling: ${uri}`);
  const req = await fetch(uri, {
    method: "GET",
  });

  if (req.ok) {
    const response = await req.json();
    console.log(`Get loaded data ${JSON.stringify(response)}`);
    let formdata = response;
    return response;
  } else {
    console.log(`Get failed to fetch ${uri}`);
    throw new Error("Sorry homie");
  }
}
