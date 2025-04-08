// services/graphqlService.ts
export async function graphqlRequest(query: string, variables?: any) {
    const token = sessionStorage.getItem("access_token");
  
    const res = await fetch("http://localhost:8888/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
    });
  
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0].message);
    return json.data;
  }
  