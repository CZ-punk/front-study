import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { isLogin, user, login, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    }

    const handleLoginPage = () => {
        navigate("/login");
    }

    console.log('isLogin? ', isLogin);
    console.log('who is this? ', user);
    return (
        <div>
            <h1>Home</h1>
            {isLogin ?
                (<button onClick={handleLogout} >logout</button>)
                :
                (<button onClick={handleLoginPage}>login page</button>)
            }

<button onClick={() => navigate('/profile')}>profile</button>

        </div>
    )
}