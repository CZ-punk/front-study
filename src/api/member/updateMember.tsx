import { AxiosInstance } from "axios";

interface ResponseDto {
    code: string;
    message: string;
    data: ResUpdateMemberDto;
}

interface ResUpdateMemberDto {
    id: number;
    username: string;
}

export interface UpdateMemberDto {
    username: string
}

const UpdateMember = async (api: AxiosInstance, memberId: number, dto: UpdateMemberDto): Promise<ResponseDto> => {
    try {
        const response = await api.patch("/api/v1/member/" + memberId, dto);
        console.log('data: ', response.data);

        return response.data;

    } catch (error) {
        console.error('Update Member Error: ', error);
        throw error;
    }
}

export default UpdateMember;