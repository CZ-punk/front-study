import { axiosInstance } from "../../util/axios";
import CustomError from "../../util/customError";

interface SignInDto {
    loginId: string;
    loginPw: string;
}

interface ResSignInDto {
    code: string;
    message: string;
    data: {
        memberId: number;
        username: string;
        accessToken: string;
        refreshToken: string;
    }
}

const SignIn = async (dto: SignInDto): Promise<ResSignInDto> => {
    try {
        const response = await axiosInstance.post("/api/v1/auth/sign-in", dto);
        console.log('data: ', response.data);
        return response.data;

    } catch (error) {
        console.error('SignIn Error: ', error);
        throw error;
    }
}

export default SignIn;