const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URL;

export const google_login_url = () => {
    const params = new URLSearchParams({
        redirect_uri: REDIRECT_URI,
        client_id: GOOGLE_CLIENT_ID,
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
        access_type: 'offline'
    });
    return `${GOOGLE_AUTH_URL}?${params.toString()}`;
};