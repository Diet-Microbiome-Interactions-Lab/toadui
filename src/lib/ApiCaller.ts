import { PUBLIC_BACKEND_API_URL } from '$env/static/public'
import { json } from '@sveltejs/kit';


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

export async function get(endpointPath: string): Promise<any> {
  const uri = PUBLIC_BACKEND_API_URL + endpointPath;
  console.log('get: calling: ' + uri)
  const res = await fetch(uri, {
    method: "GET",
    // mode: "cors",
  })

  if (res.ok) {
    const response = await res.json()
    // console.log('get: loaded:' + uri, response)
    return response
  } else {
    console.log('get: failed:' + uri)
    throw new Error(await res.text())
  }
}

export async function del(endpointPath: string): Promise<any> {
  const uri = PUBLIC_BACKEND_API_URL + endpointPath;
  console.log('del: calling: ' + uri)
  const res = await fetch(uri, {
    method: "DELETE",
    mode: "cors",
  })

  if (res.ok) {
    const response = await res.json()
    // console.log('get: loaded:' + uri, response)
    return response
  } else {
    // console.log('get: failed:' + uri)
    throw new Error(await res.text())
  }
}


export async function post(endpointPath: string, postPayload: any, jsonify: boolean = true) {
  const uri = PUBLIC_BACKEND_API_URL + endpointPath;
  console.log('post: calling: ' + uri + ' with:', postPayload)
  if (jsonify) {
    let payloadBody = JSON.stringify(postPayload)
  } else {
    let payloadBody = postPayload;
  }
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: payloadBody,
  });

  if (response.ok) {
    const responseData = await response.json();
    console.log('post: loaded:', responseData);
    return responseData;
  } else {
    console.log('post: failed:' + uri);
    const errorText = await response.text();
    throw new Error(errorText);
  }
}


export async function put(endpointPath: string, putPayload: any) {
  const uri = PUBLIC_BACKEND_API_URL + endpointPath;
  console.log('PUT: calling: ' + uri + ' with:', putPayload)
  const response = await fetch(uri, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "cors",
    body: JSON.stringify(putPayload),
  });

  if (response.ok) {
    const responseData = await response.json();
    console.log('PUT: loaded:', responseData);
    return responseData;
  } else {
    console.log('PUT: failed:' + uri);
    const errorText = await response.text();
    throw new Error(errorText);
  }
}