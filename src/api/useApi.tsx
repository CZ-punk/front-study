import useUserStore from "../store/useUserStore";
import {createApi}  from "../util/axios";

export const useApi = () => {
    const clearUserInfo = useUserStore((state) => state.clearUserInfo);
    return createApi(clearUserInfo);
}