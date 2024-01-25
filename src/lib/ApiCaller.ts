export async function getUserSession(sessionID: string): Promise<any> {
  const uri = "http:/127.0.0.1:5000/api/v1/users?email=" + sessionID;
  console.log("get: calling " + uri);
  const res = await fetch(uri, {
    method: "GET",
  });

  if (res.ok) {
    const response = await res.json();
    console.log("get: loaded " + uri, response);
    return response;
  } else {
    console.log("get: failed " + uri);
    throw new Error(await res.text());
  }
}

export async function GET(uri: string): Promise<any> {
  const fullUri = "http://127.0.0.1:5000/api/v1" + uri;
  console.log(`Get calling: ${fullUri}`);
  const req = await fetch(fullUri, {
    method: "GET",
  });

  if (req.ok) {
    const response = await req.json();
    // console.log(`Get loaded data ${JSON.stringify(response)}`);
    console.log(`Get status ${JSON.stringify(response.status)}`);
    return response;
  } else {
    console.log(`Get failed to fetch ${uri}`);
    throw new Error("Sorry homie");
  }
}
