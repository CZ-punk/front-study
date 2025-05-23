import { useState } from "react";
import { IBoard } from "../../routes/timeline";
import {
    Wrapper,
    Author,
    ImagePage,
    Title,
    ButtonContainer,
    Button,
    Image,
    DetailsButton
} from "../../style/board-components.style"

const Board = ({ memberId, boardId, title, contents, author, imageUrlList, createdAt }: IBoard) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNextImage = () => {
        if (currentIndex < imageUrlList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePreviousImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <Wrapper>
            <input type="hidden" name="memberId" value={memberId} />
            <input type="hidden" name="memberId" value={contents} />
            <input type="hidden" name="memberId" value={createdAt} />


            <Author>{author}</Author>
            <Title title={title}>{title.length > 12 ? `${title.slice(0, 12)}...` : title}</Title>

            {imageUrlList && imageUrlList.length > 0 && (
                <ImagePage>
                    <Image src={imageUrlList[currentIndex]} alt={`Image ${currentIndex}`} />
                    <ButtonContainer>
                        <Button onClick={handlePreviousImage} disabled={currentIndex === 0}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg>
                        </Button>
                        <Button onClick={handleNextImage} disabled={currentIndex === imageUrlList.length - 1}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Button>
                    </ButtonContainer>
                </ImagePage>
            )}
            <DetailsButton onClick={() => alert(`Details for board ID: ${boardId}`)}>Details</DetailsButton>

        </Wrapper>
    )
}

export default Board;