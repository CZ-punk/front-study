import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper, Title, Form, Input, Error, Switcher } from "../components/auth-components";
import { useState } from "react";
import CustomError from "../util/customError";
import SignIn from "../api/auth/signIn";
import { OAuth2Button } from "../components/oauth2-btn";
import { OAuth2Login } from "../api/auth/oauth2Login";

const Login: React.FC = () => {
    const { isLogin, user, logout, login } = useAuth();
    const [ popup, setPopup ] = useState<WindowProxy | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        loginId: "",
        loginPw: "",
    });

    const oAuth2Popup = (provider: string) => {
        const popup = window.open(OAuth2Login(provider), "Login", "width=500,height=500");
        setPopup(popup);
    }
    
    useEffect(() => {
        if (!popup) {
            return;
        }

        window.addEventListener(
            "message",
            (event) => {
                if (event.origin !== window.location.origin) return;

                if (event.data.type === "SUCCESS") {
                    console.log('Success');
                    console.log('isLogin: ', isLogin);
                    console.log('user: ', user);
    
                    popup.close();
                    setPopup(null)
                    navigate(event.data.payload);
                } else if (event.data.type === "FAILURE") {
                    console.log('Failure');
                    console.log('isLogin: ', isLogin);
                    console.log('user: ', user);
    
                    popup.close();
                    setPopup(null)
                    alert(event.data.payload);
                }

                // 일단됐다 ㅅㅂ 내일 ㄱㄱ
    
            }
        )

        // const handleMessage = (event: MessageEvent) => {
        //     console.log('please call!');

        //     if (event.origin !== window.location.origin) return;

           

        //     if (event.data.type === "SUCCESS") {
        //         console.log('Success');
        //         console.log('isLogin: ', isLogin);
        //         console.log('user: ', user);

        //         popup.close();
        //         setPopup(null)
        //         navigate(event.data.payload);
        //     } else if (event.data.type === "FAILURE") {
        //         console.log('Failure');
        //         console.log('isLogin: ', isLogin);
        //         console.log('user: ', user);

        //         popup.close();
        //         setPopup(null)
        //         alert(event.data.payload);
        //     }

        //     window.addEventListener("message", handleMessage, false);
            
        //     return () => {
        //         window.removeEventListener("message", handleMessage);
        //         popup?.close();
        //         setPopup(null);
        //     };
        // }
    }, [popup, isLogin]);

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

    const handleLogin = (id: number, name: string, accessToken: string, refreshToken: string) => {
        const userInfo = { id: id, name: name, accessToken: accessToken, refreshToken: refreshToken };
        login(userInfo);
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

            const data = await SignIn(dto);
            handleLogin(
                data.data.memberId,
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
            <OAuth2Button />
            <button onClick={() => oAuth2Popup('google')}>
                <img src="/image/google_logo.png" alt="google_logo" />
            </button>
        </Wrapper>
    );
};

export default Login;
