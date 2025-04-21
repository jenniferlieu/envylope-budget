export const BASE_URL = import.meta.env.VITE_API_URL;

async function makeApiCall(endpoint, options) {
  try {
    const response = await fetch(`${BASE_URL}/api/${endpoint}`, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function getApi(endpoint) {
  return makeApiCall(endpoint, {
    method: "GET",
  });
}

export async function postApi(endpoint, data) {
  return makeApiCall(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function putApi(endpoint, data) {
  return makeApiCall(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteApi(endpoint) {
  return makeApiCall(endpoint, {
    method: "DELETE",
  });
}
