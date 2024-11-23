import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5157/api",
});

export const getTask = (id) => api.get(`/tasks/${id}`);
export const getAllTasks = () => api.get("/tasks/all");
export const getPendingTasks = () => api.get("/tasks/pending");
export const getOverdueTasks = () => api.get("/tasks/overdue");
export const createTask = (task) => api.post("/tasks", task);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);
export const markTaskAsDone = (id) => api.put(`/tasks/${id}/complete`);

export default api;