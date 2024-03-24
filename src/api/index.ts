import axios, { AxiosInstance } from "axios";

const API_URL = "";

export const $api: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const $authorizationApi: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

$authorizationApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});
