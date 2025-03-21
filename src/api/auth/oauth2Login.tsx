export const OAuth2Login = (provider: string) => {
    return `http://localhost:8080/oauth2/authorization/${provider}`;
}