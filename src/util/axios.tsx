import Axios, { AxiosError, AxiosResponse } from "axios";
import  CustomError from "./customError";
import { BASE_URL } from "../constant/constant";


export const axiosInstance = Axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
})

// axios.interceptors.request.use(
//     (config) => {
//         const accessToken = getToken();

//         config.headers["Authorization"] = `Bearer ${accessToken}`
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

axiosInstance.interceptors.response.use(
    (response) => {
        // if (response.data.message === "Error") {
        //     throw new CustomError(
        //         `Server Error: ${response.data}`,
        //         response.status,
        //         response.data
        //     );
        // }
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            console.log('axios error: ', error);
            throw new CustomError(
                `Request Faild: ${error.response.status}`,
                error.response.status,
                error.response.data
            );
        } else if (error.request) {
            console.log('axios error: ', error);
            throw new CustomError('Not received response on Server', 0);
        } else {
            console.log('axios error: ', error);
            throw new CustomError(`Axios Error: ${error.message}`, 0);
        }
    }
)

