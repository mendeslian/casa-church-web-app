import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getAdminStats() {
    const { data } = await axios.get(`${BASE_URL}/users/stats`);
    return data;
}

export async function getRecentActivities({ page = 1, limit = 5 } = {}) {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        orderBy: "createdAt",
        orderDirection: "DESC",
    });

    const { data } = await axios.get(`${BASE_URL}/user-activities?${params.toString()}`);
    return data;
}

export async function getUpcomingEvents({ page = 1, limit = 5 } = {}) {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        orderBy: "startDate",
        orderDirection: "ASC",
    });

    const { data } = await axios.get(`${BASE_URL}/events?${params.toString()}`);

    // Filtra apenas eventos futuros
    const upcomingEvents = data.events?.filter(event =>
        new Date(event.startDate) >= new Date()
    ) || [];

    return {
        ...data,
        events: upcomingEvents.slice(0, limit)
    };
}