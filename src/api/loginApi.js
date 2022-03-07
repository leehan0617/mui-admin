import httpClient from "./httpClient";

const loginApi = (id, password) =>
  httpClient.post("/login", {
    id,
    password,
  });

export { loginApi };
