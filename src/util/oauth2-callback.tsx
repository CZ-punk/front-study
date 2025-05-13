import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useUserStore, { UserInfo } from '../store/useUserStore';
import { useLocation } from 'react-router-dom';

const OAuth2Callback = () => {
    const { setUserInfo } = useUserStore();
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const queryParams = new URLSearchParams(location.search);
                const error = queryParams.get('error');
                if (error) {
                    const decodedError = decodeURIComponent(error.replace(/\+/g, ' ')); 
                    setErrorMessage(decodedError);
                    throw new Error(decodedError);
                }
                
                const id = decodeURIComponent(Cookies.get('id') as string);
                const name = decodeURIComponent(Cookies.get('name') as string);
                const profileImageUrl = decodeURIComponent(Cookies.get('profileImageUrl') as string);
                const accessToken = Cookies.get('accessToken');
                const refreshToken = Cookies.get('refreshToken');

                if (accessToken && refreshToken && id && name) {
                    const userInfo: UserInfo = {
                        id: id,
                        name: name,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                        profileImageUrl: profileImageUrl,
                    }

                    setUserInfo(userInfo);
                    setIsLogin(true);
                } else {
                    console.error('Missing login info in cookies');
                    setIsLogin(false);
                }
            } catch (err) {
                console.error('Login Failed: ', err);
                setIsLogin(false);
            }
        };
        handleCallback();
    }, []);

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        if (window.opener) {
            const message = {
                type: isLogin ? "SUCCESS" : "FAILURE",
                payload: isLogin ? "/" : errorMessage,
            };

            window.opener.postMessage(message, window.location.origin);
        }
        window.close();
    }, [isLogin, isFirstRender]);

    return null;
};

export default OAuth2Callback;