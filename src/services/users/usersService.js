import axios from "axios";

export async function create(body) {
  const { data } = await axios.post(`http://localhost:3000/users`, body);

  return data;
}
