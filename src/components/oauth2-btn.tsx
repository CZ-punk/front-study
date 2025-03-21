import { styled } from "styled-components"
import { OAuth2Login } from "../api/auth/oauth2Login"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const Button = styled.span`
    background-color: gray;
    padding: 15px 15px;
    border-radius: 50px;
    border: 0;
    margin-top: 50px;
    gap: 5px;
`

const Logo = styled.img`
    width: 25px;
    height: 25px;
    objectFit: contain;
    cursor: pointer;
`

export const OAuth2Button = () => {
    
    const oAuth2Login = (provider: string) => {
        const oAuth2Url = OAuth2Login(provider);
        window.open(
            oAuth2Url,
            "Login",
            "width:400,height:400"
        );
    }
  
    return (
    <Wrapper>
        <Button onClick={() => oAuth2Login('google')}>
            <Logo src="/image/google_logo.png" alt="google_logo" />
        </Button>
        <Button onClick={() => oAuth2Login('kakao')}>
            <Logo src="/image/kakao_logo.png" alt="kakao_logo" />
        </Button>
        <Button onClick={() => oAuth2Login('naver')}>
            <Logo src="/image/naver_logo.png" alt="naver_logo" />
        </Button>
    </Wrapper>
    )
}