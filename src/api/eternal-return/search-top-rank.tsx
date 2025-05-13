import { AxiosInstance } from "axios";

interface ResponseDto {
    code: string;
    message: string;
    data: ResTopRankDto;
}

export interface ResTopRankDto {
    seasonId: number;
    userRankDtoPage: UserRankDtoPage;
}

export interface UserRankDtoPage {
    content: Content[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
}

export interface Content {
    userNum: number;
    rank: number;
    nickname: string;
    mmr: number;
    averageRank: number;
    averageWin: number;
    top3: number;
    averageKill: number;
    escapeCount: number;
    totalGameCount: number;
    mainExperiment: MainExperiment;
}

export interface MainExperiment {
    experimentCode1: number;
    experimentCode2: number;
    experimentCode3: number;
    usage1: number;
    usage2: number;
    usage3: number;
}
const SearchTopRank = async (api: AxiosInstance, seasonId: string, page: number, size: number): Promise<ResponseDto> => {
    try {
        const response = await api.get("/api/v1/eternal-return/top/rank/" + seasonId, {
            params: {
                page: page,
                size: size, 
            }
        });
        console.log('data: ', response.data);

        return response.data;

    } catch (error) {
        console.error('Delete Member Error: ', error);
        throw error;
    }
}

export default SearchTopRank;