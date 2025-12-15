import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function create(body) {
  const { data } = await axios.post(`${BASE_URL}/users`, body);
  return data;
}

export async function findAllUsers({ page = 1, limit = 10, role, active } = {}) {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (role) params.append("role", role);
  if (active !== undefined) params.append("active", active);

  const { data } = await axios.get(`${BASE_URL}/users?${params.toString()}`);
  return data;
}

export async function findUserById(id) {
  const { data } = await axios.get(`${BASE_URL}/users/${id}`);
  return data;
}

export async function updateUser(id, body) {
  const { data } = await axios.patch(`${BASE_URL}/users/${id}`, body);
  return data;
}

export async function deleteUser(id) {
  const { data } = await axios.delete(`${BASE_URL}/users/${id}`);
  return data;
}