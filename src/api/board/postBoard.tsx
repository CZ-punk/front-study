import { AxiosInstance } from "axios";

interface PostBoardDto {
    title: string;
    contents: string;
    imageFiles: File[] | null;
}

interface ResPostBoardDto {
    code: string;
    message: string;
    data: {
        id: string;
        title: string;
        contents: string;
        imageUrlList: string[];
    }
}

const PostBoard = async (dto: PostBoardDto, api: AxiosInstance): Promise<ResPostBoardDto> => {
    try {
        const formData = new FormData();
        formData.append('title', dto.title);
        formData.append('contents', dto.contents);

        if (dto.imageFiles) {
            Array.from(dto.imageFiles).forEach(file => {
                formData.append('imageFiles', file);
            });
        }
        
        console.log('post request start')
        const response = await api.post(
            "/api/v1/board",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        console.log('post request end')

        console.log('data: ', response.data);
        return response.data;

    } catch (error) {
        console.error('Post Board Error: ', error);
        throw error;
    }
}

export default PostBoard;