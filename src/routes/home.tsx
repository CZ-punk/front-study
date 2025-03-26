import { Link, useNavigate } from "react-router-dom";
import { Wrapper, Menu, MenuItem } from "../components/home-components.style";
import useUserStore, { useUserInfo } from "../store/useUserStore";
import PostBoardForm from "../components/post-board-form";
import { useApi } from "../api/useApi";
import SignOut from "../api/auth/signOut";
import TimeLine from "../components/timeline";

const Home: React.FC = () => {
    const clearUserInfo = useUserStore((state) => state.clearUserInfo);
    const { userInfo, isLogin } = useUserInfo();
    const navigate = useNavigate();
    const api = useApi();

    const onLogout = async () => {
        const ok = confirm("are you sure you want to logout?");
        if (ok) {
            await SignOut(api);
            clearUserInfo()
            navigate("/login");
        }
    }

    return (
        <>
            <Wrapper>
                <Menu>
                    <Link to="/">
                        <MenuItem >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </MenuItem>
                    </Link>

                    {
                        isLogin ?
                            <>
                                <Link to="/profile">
                                    <MenuItem>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </MenuItem>
                                </Link>

                                <MenuItem className="logout" onClick={onLogout} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>

                                </MenuItem>
                            </>
                            :
                            <>
                                <Link to="/login">
                                    <MenuItem>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                        </svg>
                                    </MenuItem>
                                </Link>
                            </>
                    }
                </Menu>
                <PostBoardForm/>
                <TimeLine />
            </Wrapper>
            
        </>
    );

}

export default Home;