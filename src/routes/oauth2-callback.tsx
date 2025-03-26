import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useUserStore, { UserInfo } from '../store/useUserStore';
import { useNavigate } from 'react-router-dom';

const OAuth2Callback = () => {
    const { setUserInfo } = useUserStore();
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const id = decodeURIComponent(Cookies.get('id') as string);
                const name = decodeURIComponent(Cookies.get('name') as string);
                const accessToken = Cookies.get('accessToken');
                const refreshToken = Cookies.get('refreshToken');

                if (accessToken && refreshToken && id && name) {
                    const userInfo: UserInfo = {
                        id: Cookies.get('id') as string,
                        name: Cookies.get('name') as string,
                        accessToken: Cookies.get('accessToken') as string,
                        refreshToken: Cookies.get('refreshToken') as string
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
                payload: isLogin ? "/" : "FAILURE"
            };

            window.opener.postMessage(message, window.location.origin);
        }
        window.close();
    }, [isLogin, isFirstRender]);

    return null;
};

export default OAuth2Callback;