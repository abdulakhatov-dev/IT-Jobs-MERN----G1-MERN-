import axios from "axios";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const createAxiosInstance = (token: string | null, signOut: () => void) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000, // 10 secund
  });

  // Request interceptor to add token
  instance.interceptors.request.use(
    (request) => {
      if (token) {
        if (!token.startsWith("Bearer ")) {
          request.headers.Authorization = `Bearer ${token}`;
        } else {
          request.headers.Authorization = token;
        }
      }

      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle errors
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        signOut();
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const useAxiosInstance = () => {
  const token = useAuthHeader();
  const signOut = useSignOut();

  const axiosInstance = createAxiosInstance(token, signOut);

  return axiosInstance;
};

export default useAxiosInstance;
