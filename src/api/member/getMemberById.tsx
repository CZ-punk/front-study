import { AxiosInstance } from "axios";

interface ResponseDto {
    code: string;
    message: string;
    data: ResGetMemberDto;
}

interface ResGetMemberDto {
    id: number;
    username: string;
    boardDtoList: BoardDto[];
}

interface BoardDto {
    boardId: number;
    title: string;
    titleImageUrl: string;
}

const GetMemberById = async (api: AxiosInstance, memberId: string): Promise<ResponseDto> => {
    try {
        const response = await api.post("/api/v1/member/" + memberId);
        console.log('data: ', response.data);

        return response.data;

    } catch (error) {
        console.error('SignIn Error: ', error);
        throw error;
    }
}

export default GetMemberById;