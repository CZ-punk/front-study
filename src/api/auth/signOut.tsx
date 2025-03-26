import { AxiosInstance } from "axios";
import useUserStore from "../../store/useUserStore";

interface ResSignOutDto {
    code: string;
    message: string;
    data: null;
}

const SignOut = async (api: AxiosInstance): Promise<ResSignOutDto> => {
    try {
        const response = await api.post("/api/v1/auth/sign-out");
        console.log('data: ', response.data);

        useUserStore.getState().clearUserInfo();

        return response.data;

    } catch (error) {
        console.error('SignIn Error: ', error);
        throw error;
    }
}

export default SignOut;