import useUserStore from "../store/useUserStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode; }) => {
    const isLogin = useUserStore((state) => state.isLogin);
    if (isLogin) return <Navigate to="/login" />
    return children;
}

export default ProtectedRoute;