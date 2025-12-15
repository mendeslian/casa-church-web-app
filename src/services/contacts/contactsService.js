import axios from "axios";

/**
 * Envia uma mensagem de contato para o backend
 * @param {{ name: string, email: string, subject: string, message: string }} body
 * @returns response.data
 */
export async function createContact(body) {
  const { data } = await axios.post(`http://localhost:3000/contact-messages`, body);
  return data;
}