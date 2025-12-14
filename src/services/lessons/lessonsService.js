import axios from "axios";


const BASE_URL = "http://localhost:3000";


export async function getLessons(params = {}) {

const { data } = await axios.get(`${BASE_URL}/lessons`, {

params,

});


// Esperado: { lessons: [] }

return data;

}


export async function getLessonById(lessonId) {

const { data } = await axios.get(`${BASE_URL}/lessons/${lessonId}`);

return data;

}