import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 300px;
    height: 200px;
    border-radius: 8px; 
    overflow: hidden; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
display: block;
    max-width: none; 
    width: 120%; 
    height: auto;
    object-fit: cover; 
    transition: transform 0.3s ease; 
    
    &:hover {
        transform: scale(1.3);
    }
`;


const HeaderImage = ({src}: {src: string}) => {

    return (
        <Wrapper>
            <Image src={src} alt="Player Most Skin Image"/>
        </Wrapper>
    )
}

export default HeaderImage;