import { AxiosInstance } from "axios";

interface ResponseDto {
    code: string;
    message: string;
    data: ResUserInfoDto;
}

export interface ResUserInfoDto {
    seasonId: number;
    seasonName: string;
    seasonStart: string;
    seasonEnd: string;
    isCurrent: boolean;
}

const GetSeason = async (api: AxiosInstance): Promise<ResponseDto> => {
    try {
        const response = await api.get("/api/v1/eternal-return/season");
        console.log('data: ', response.data);

        return response.data;

    } catch (error) {
        console.error('Delete Member Error: ', error);
        throw error;
    }
}

export default GetSeason;