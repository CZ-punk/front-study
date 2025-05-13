import { AxiosInstance } from "axios";


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
        profileImageUrl: string;
    }
}


const SignIn = async (dto: SignInDto, api: AxiosInstance): Promise<ResSignInDto> => {
    try {
        const response = await api.post("/api/v1/auth/sign-in", dto);
        console.log('data: ', response.data);
        return response.data;

    } catch (error) {
        console.error('SignIn Error: ', error);
        throw error;
    }
}

export default SignIn;