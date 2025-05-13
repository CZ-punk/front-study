import styled from "styled-components";


export const Wrapper = styled.div`
    flex: 1
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: auto;
    
`

export const BackgroundImageWrapper = styled.div`
    position: relative; 
    overflow: hidden;
    width: 50%;
    margin: 0 auto;
`

export const BackgroundImage = styled.img`
    width: 100%;
    height: auto; 
    display: block; 
    border-radius: 16px;
`

export const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, black);
`;

export const SearchFormWrapper = styled.div`
    position: relative;
    margin-top: -50px;
    z-index: 2;
`

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`

export const Input = styled.input`
    width: 200px;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-right: 10px;
`

export const InputButton = styled.input`
    background-color: #007bff;
    color: white; 
    padding: 10px 15px;
    border: none; 
    border-radius: 8px; 
    cursor: pointer; 
    
    &:hover {
        background-color: #0056b3;
    }
`
// const [nickname, setNickname] = useState("");

    // const onSubmit = (e) => {
    // }
const SearchMenu: React.FC = () => {
    



    return (
        <Wrapper>
            <BackgroundImageWrapper>
                <BackgroundImage src="/image/eternal-return-search-bg.png" alt="er-search-bg"/>
                <GradientOverlay />
            </BackgroundImageWrapper>
            <SearchFormWrapper>
                <SearchForm>
                    <Input placeholder="Search Your Nickname!"/>
                    <InputButton type="submit" value="Search" />
                </SearchForm>
            </SearchFormWrapper>

        </Wrapper>
    );

}


export default SearchMenu;