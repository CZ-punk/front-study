import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuth2PopupHandler = (popup: WindowProxy | null,  setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!popup) {
            return;
        }

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== window.location.origin) return;

            if (event.data.type === "SUCCESS") {
                navigate(event.data.payload);
                window.location.reload(); 
            } else if (event.data.type === "FAILURE") {
                setErrorMessage(event.data.payload);
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [popup]);
};

export default OAuth2PopupHandler;