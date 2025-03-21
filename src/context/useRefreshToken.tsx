// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { axiosInstance } from "../util/axios"

// const REFRESH_URL = `/api/v1/auth/token/refresh`;

// export const useRefreshToken = () => {
//     const context = useContext(AuthContext);
//     const onSilentRefresh = async () => {
//         const accessToken = localStorage.getItem("access-token");
//         const refreshToken = localStorage.getItem("refresh-token");
//         const response = await axiosInstance.post(
//             REFRESH_URL,
//             {
//                 headers: {
//                     'Authorization': `Bearer ${accessToken}`,
//                     'Refresh-Token': `Bearer ${refreshToken}`,
//                     'Content-Type': "application/json"
//                 }
//             },
//             { withCredentials: true }
//         );

//         const response = await axiosInstance.post("/api/v1/auth/sign-in", dto);
//         console.log('data: ', response.data);
//         return response.data;
//     }

// }

// TODO: 추후 고민

// // refresh-token expiration time = 60 * 60 * 1000L