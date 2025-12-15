import axios from "axios";

export async function findAllEvents(params = {}) {
  const { data } = await axios.get(`http://localhost:3000/events`, { params });

  return data;
}

export async function findEventById(eventId) {
  const { data } = await axios.get(`http://localhost:3000/events/${eventId}`);

  return data;
}

export async function createEvent(body) {
  const { data } = await axios.post(`http://localhost:3000/events`, body);

  return data;
}

export async function updateEvent(id, body) {
  const { data } = await axios.patch(`http://localhost:3000/events/${id}`, body);

  return data;
}

export async function deleteEvent(id) {
  const { data } = await axios.delete(`http://localhost:3000/events/${id}`);

  return data;
}
