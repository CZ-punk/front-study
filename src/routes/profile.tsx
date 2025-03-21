import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const { isLogin, user } = useAuth();

    console.log('isLogin', isLogin);
    console.log('user:', user);
    if (!isLogin) return <Navigate to="/login" />;
    return (
        <div>
            <p>login state: {isLogin}</p>
            <p>id: {user.id}</p>        
            <p>username: {user.name}</p>        
        </div>
    )
}

export default Profile;