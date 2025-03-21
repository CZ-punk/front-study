import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../context/AuthContext';


const OAuth2Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLogin, login } = useAuth();

    useEffect(() => {
        
        const handleCallback = async () => {
            
            try {
                console.log('씨부랄')
                const accessToken = Cookies.get('accessToken');
                const refreshToken = Cookies.get('refreshToken');
                const memberId = decodeURIComponent(Cookies.get('memberId')); 
                const username = decodeURIComponent(Cookies.get('username'));

                if (accessToken && refreshToken && memberId && username) {
                    const userInfo = {
                        id: Cookies.get('memberId'),
                        name: Cookies.get('username'),
                        accessToken: Cookies.get('accessToken'),
                        refreshToken: Cookies.get('refreshToken')
                    }
                    login(userInfo);

                } else {
                    console.error('Missing login info in cookies');
                }
            } catch (err) {
                console.error('Login Failed: ', err);
            } finally {
                if (window.opener) {
                    if (isLogin) {
                        window.opener.postMessage({
                            type: "SUCCESS",
                            payload: "/"
                        }, window.location.origin)
                        
                    } else {
                        window.opener.postMessage({
                            type: "FAILURE",
                            payload: "FAILURE"
                        }, window.location.origin)
                    }
                }
            }
        };

        handleCallback();

    }, []);

    return null;
};

export default OAuth2Callback;
