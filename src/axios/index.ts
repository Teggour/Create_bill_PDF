import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const axiosConfig: AxiosRequestConfig = {
	baseURL: process.env.REACT_APP_AUTH0_API_URL,
	timeout: 5000,
	headers: { "Content-type": "application/json" },
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

export default axiosInstance;
