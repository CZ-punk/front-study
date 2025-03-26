import { Wrapper, ButtonWrapper, Button, Logo } from "../style/auth-btn-components.style";

interface OAuth2ButtonProps {
    ouath2Login: (provider: string) => void;
}

export const OAuth2Button: React.FC<OAuth2ButtonProps> = ({ ouath2Login }) => {
    return (
        <Wrapper>
            <span>Do you want to login with social media?</span>
            <ButtonWrapper>
                <Button onClick={() => ouath2Login('google')}>
                    <Logo src="/image/google_logo.png" alt="google_logo" />
                </Button>
                <Button onClick={() => ouath2Login('kakao')}>
                    <Logo src="/image/kakao_logo.png" alt="kakao_logo" />
                </Button>
                <Button onClick={() => ouath2Login('naver')}>
                    <Logo src="/image/naver_logo.png" alt="naver_logo" />
                </Button>
            </ButtonWrapper>
        </Wrapper>
    )
} 