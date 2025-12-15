import axios from "axios";

export async function login(body) {
  const { data } = await axios.post(`http://localhost:3000/auth/login`, body);
  return data;
}
