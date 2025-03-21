class CustomError extends Error {
    response?: any;
    statusCode: number;

    constructor(message: string, statusCode: number, response?: any) {
        super(message);
        this.name = "AuthError";
        this.response = response;
        this.statusCode = statusCode;
    }
}

export default CustomError;