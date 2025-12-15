import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function createPost(body) {
    const { data } = await axios.post(`${BASE_URL}/posts`, body);
    return data;
}

export async function findAllPosts({ page = 1, limit = 10, orderBy = "createdAt", orderDirection = "DESC", userId } = {}) {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        orderBy,
        orderDirection,
    });

    if (userId) {
        params.append("userId", userId);
    }

    const { data } = await axios.get(`${BASE_URL}/posts?${params.toString()}`);
    return data;
}

export async function findPostById(id) {
    const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
    return data;
}

export async function deletePost(id) {
    const { data } = await axios.delete(`${BASE_URL}/posts/${id}`);
    return data;
}