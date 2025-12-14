import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getSermons(params = {}) {
    const { data } = await axios.get(`${BASE_URL}/sermons`, {
    params,
    });

    if (Array.isArray(data?.sermons)) {
        return data.sermons;
    }
return [];
}

export async function getSermonById(id) {
    const { data } = await axios.get(`${BASE_URL}/sermons/${id}`);
    return data;
}