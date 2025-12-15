import axios from "axios";

const BASE_URL = "http://localhost:3000";


export async function createLessonProgress({ userId, lessonId }) {
    const { data } = await axios.post(`${BASE_URL}/lesson-progress`, {
    userId,
    lessonId,
    });

return data;
}


export async function getLessonProgressByLessonId(lessonId) {
    const { data } = await axios.get(`${BASE_URL}/lesson-progress`, {
    params: {
    lessonId,
},
});

return data;
}

export async function getLessonProgress(params = {}) {
    const { data } = await axios.get(`${BASE_URL}/lesson-progress`, {
    params,
});

return data;
}