import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getArticles = () => API.get("/innovations");

export const getArticle = (id) =>
  API.get(`/innovations/${id}`);

export const createArticle = (data) =>
  API.post("/innovations", data);

export const updateArticle = (id, data) =>
  API.put(`/innovations/${id}`, data);

export const deleteArticle = (id) =>
  API.delete(`/innovations/${id}`);

export default API;