import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://e-comerce-back.onrender.com"
});

// Agregar un interceptor para incluir el token en todas las solicitudes
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
