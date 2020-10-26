const apiClient = (
  url: string,
  {
    method,
    data,
    bearerToken,
    headers: customHeaders,
    ...customConfig
  }: any = {}
) => {
  const config = {
    method: method ?? "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: bearerToken ? `Bearer ${bearerToken}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(url, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export default apiClient;
