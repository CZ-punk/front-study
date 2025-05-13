import axios, {
    AxiosInstance,
    // AxiosError,
    // AxiosRequestConfig,
    // AxiosResponse,
} from "axios";

import { BASE_URL } from "../constant/constant";
import useUserStore from "../store/useUserStore";


export const createApi = (logoutFn: () => void): AxiosInstance => {
    const instance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
    });

    // let _retry = false;
    // let isRefreshing = false;
    // let failedQueue: Array<{
    //     resolve: (value?: unknown) => void;
    //     reject: (reason?: any) => void
    // }> = [];

    // const proccessQueue = (error: AxiosError | null, token: string | null = null) => {
    //     failedQueue.forEach((prom) => {

    //         console.log('Queue Logiz!')
    //         if (error) {
    //             console.log('error!')
    //             prom.reject(error);
    //         } else {
    //             console.log('resolve!')
    //             prom.resolve(token);
    //         }
    //     });
    //     failedQueue = [];
    // }

    instance.interceptors.request.use((config) => {
        const userInfo = useUserStore.getState().userInfo;
        if (userInfo?.accessToken) {
            config.headers['Authorization'] = `Bearer ${userInfo.accessToken}`;
        }

        return config;
    }, (error) => {
        console.error('request error: ', error);
        return Promise.reject(error);
    });

    // instance.interceptors.response.use((error: AxiosError): Promise<AxiosError | AxiosResponse> => {
    //     console.log("interceptor response!");
    //     console.log(error);

    //     return Promise.reject(error);
    // })

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response) {
                console.log('error response data: ', error.response.data);
                console.log('error response status: ', error.response.status);
                console.log('error response headers: ', error.response.headers);
                
                if ( error.response.data === "Token Related Error") {
                    logoutFn();
                    window.location.href = '/';
                }
            } else if (error.request) {
                console.log('error request: ', error.request);
            } else {
                console.log('Error', error.message);
            }
            return Promise.reject(error);
        }
    );

    // const handleResponseError = async (error: AxiosError): Promise<AxiosError | AxiosResponse> => {
    //     const originalRequest = error.config as AxiosRequestConfig & {
    //         _retry?: boolean
    //     };

    //     originalRequest._retry = _retry;

    //     // auth error!
    //     if (error.response?.status === 401 && !originalRequest._retry) {
    //         _retry = true;

    //         if (isRefreshing) {
    //             console.log('is Refresh!');
    //             console.log(error.response);
    //             return new Promise((resolve, reject) => {
    //                 failedQueue.push({ resolve, reject });
    //             })
    //                 .then(() => {
    //                     return instance(originalRequest);
    //                 })
    //                 .catch((err) => {
    //                     console.log("isRefreshing Request Error: ", err);
    //                     return Promise.reject(err);
    //                 })
    //         }

    //         isRefreshing = true;
    //         try {
    //             console.log('request token Recreate');
    //             const response = await instance.post("/api/v1/auth/token/refresh");
    //             console.log('response status: ', response.status);
    //             if (response.status === 200) {
    //                 console.log('success token Recreate');
    //                 isRefreshing = false;
    //                 const accessToken = response.data.accessToken;
    //                 const refreshToken = response.data.refreshToken;
    //                 const userInfo = useUserStore.getState().userInfo;
    //                 const setUserInfo = useUserStore.getState().setUserInfo;
    //                 setUserInfo({
    //                     id: userInfo?.id || '',
    //                     name: userInfo?.name || '',
    //                     accessToken: accessToken,
    //                     refreshToken: refreshToken,
    //                 });

    //                 proccessQueue(null);
    //                 return instance(originalRequest);
    //             }
    //         } catch (err) {
    //             console.error('failure token Recreate: ', err);
    //             console.log('logout excute');
    //             isRefreshing = false;
    //             proccessQueue(err as AxiosError);
    //             logoutFn();
    //             return Promise.reject(err);
    //         }
    //     }
    //
    //     return Promise.reject(error);
    // }

    // instance.interceptors.response.use(
    //     (response) => response,
    //     handleResponseError
    // );
    
    return instance;
}