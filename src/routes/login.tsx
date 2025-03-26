import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper, Title, Form, Input, Error, Switcher } from "../style/login-routes.style";
import { useState } from "react";
import CustomError from "../util/customError";
import SignIn from "../api/auth/signIn";
import { OAuth2Button } from "../components/auth-btn";
import useUserStore, { UserInfo } from '../store/useUserStore';
import OAuth2PopupHandler from "./oauth2-popup-handler";
import { OAuth2Login } from "../api/auth/oauth2Login";
import { useApi } from "../api/useApi";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        loginId: "",
        loginPw: "",
    });
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [popup, setPopup] = useState<WindowProxy | null>(null);
    const { setUserInfo } = useUserStore();
    const api = useApi();

    const oAuth2Popup = (provider: string) => {
        const popup = window.open(OAuth2Login(provider), "Login", "width=400,height=500");
        setPopup(popup);
    };

    OAuth2PopupHandler(popup);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validation = (): string | null => {
        if (formData.loginId.length < 6) {
            return "Email must be at least 6 characters 😥";
        } else if (formData.loginPw.length < 6) {
            return "Password must be at least 6 characters 😥";
        }
        return null;
    };

    const handleLogin = (id: string, name: string, accessToken: string, refreshToken: string) => {
        const userInfo: UserInfo = { id: id, name: name, accessToken: accessToken, refreshToken: refreshToken };
        setUserInfo(userInfo);
        navigate("/");
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            setErrorMessage('');
            const error = validation()
            if (error) {
                setErrorMessage(error);
                return;
            }

            const dto = {
                loginId: formData.loginId,
                loginPw: formData.loginPw
            }
            const data = await SignIn(dto, api);
            handleLogin(
                data.data.memberId.toString(),
                data.data.username,
                data.data.accessToken,
                data.data.refreshToken
            );

            alert('Sign In Success!');
            navigate("/");

        } catch (error) {
            if (error instanceof CustomError) {
                setErrorMessage(error.response.data);
                setIsLoading(false);
            }
        }
    };

    return (
        <Wrapper>
            <Title>Login 📡</Title>
            <Form onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    name="loginId"
                    value={formData.loginId}
                    placeholder="Email"
                    type="text"
                />
                <Input
                    onChange={onChange}
                    name="loginPw"
                    value={formData.loginPw}
                    placeholder="Password"
                    type="password"
                />
                <Input
                    type="submit"
                    value={isLoading ? "Loading..." : "Login "}
                />
            </Form>
            {errorMessage !== "" ? <Error>{errorMessage}</Error> : null}
            <Switcher>
                Don't have an account?{" "}
                <Link to="/create-account">Create one &rarr;</Link>
            </Switcher>

            <OAuth2Button ouath2Login={oAuth2Popup} />

        </Wrapper>
    );
};

export default Login;
