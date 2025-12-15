import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function createSermon(body) {
    const { data } = await axios.post(`${BASE_URL}/sermons`, body);
    return data;
}

export async function findAllSermons({ page = 1, limit = 10, orderBy = "createdAt", orderDirection = "DESC" } = {}) {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        orderBy,
        orderDirection,
    });

    const { data } = await axios.get(`${BASE_URL}/sermons?${params.toString()}`);
    return data;
}

export async function findSermonById(id) {
    const { data } = await axios.get(`${BASE_URL}/sermons/${id}`);
    return data;
}

export async function updateSermon(id, body) {
    const { data } = await axios.patch(`${BASE_URL}/sermons/${id}`, body);
    return data;
}

export async function deleteSermon(id) {
    const { data } = await axios.delete(`${BASE_URL}/sermons/${id}`);
    return data;
}