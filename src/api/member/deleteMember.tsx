import { AxiosInstance } from "axios";

interface ResponseDto {
    code: string;
    message: string;
    data: null;
}

const DeleteMemberById = async (api: AxiosInstance, memberId: string): Promise<ResponseDto> => {
    try {
        const response = await api.delete("/api/v1/member/" + memberId);
        console.log('data: ', response.data);

        return response.data;

    } catch (error) {
        console.error('Delete Member Error: ', error);
        throw error;
    }
}

export default DeleteMemberById;