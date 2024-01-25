export async function GET() {
  const response = await fetch("http://127.0.0.1:5000/api/v1/amplicon/fastas");
  const items = await response.json();
  return new Response(JSON.stringify(items), {
    headers: {
      ContentType: "application/json",
    },
  });
}
