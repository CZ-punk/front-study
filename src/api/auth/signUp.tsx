import { axiosInstance } from "../../util/axios";
import CustomError from "../../util/customError";

interface SignUpDto {
    loginId: string;
    loginPw: string;
    username: string;
}

interface ResSignUpDto {
    code: string;
    message: string;
    data: {
        loginId: string;
        username: string;
    }
}

const SignUp = async (dto: SignUpDto): Promise<ResSignUpDto> => {
    try {
        const response = await axiosInstance.post("/api/v1/auth/sign-up", dto);
        console.log('data: ', response.data);
        return response.data;

    } catch (error) {
        console.error('SignUp Error: ', error);
        throw error;
    }
}

export default SignUp;