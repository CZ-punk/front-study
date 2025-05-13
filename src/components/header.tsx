import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserStore from "../store/useUserStore";

const Wrapper = styled.nav`
  background-color: #1a1a1a;
  color: #ffffff; 
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #ddd;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 0.5rem 1rem; 
  border-radius: 20px; 
  border: 1px solid transparent;

  &:hover {
    color: #ddd;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #64ffda; 
  }
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
`

const NavBar: React.FC = () => {
  const { userInfo, isLogin, clearUserInfo } = useUserStore();
  const navigate = useNavigate();

  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    const ok = confirm('want to logout?');
    if (ok) {
      clearUserInfo();
      navigate('/');
    }
  }
  
  return (
    <Wrapper>
      <Logo href="/">CZ-Punk</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/eternal-return">EternalReturn</NavLink>
        <NavLink href="/timeline">TimeLine</NavLink>
        <NavLink href="/board">Board</NavLink>
        <NavLink href={isLogin ? "/profile" : "/login"}>
          {
            isLogin ? (
              <>
                {
                  userInfo && userInfo.profileImageUrl !== "null" ? (
                    <ProfileImage src={userInfo.profileImageUrl} alt="profile_img" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" style={{ width: '24px', height: '24px' }}>
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                  )
                }
              </>
            ) : (
              "Login"
            )
          }

        </NavLink>
        {isLogin && (
          <NavLink href="/" onClick={(e) => logout(e)}>Logout</NavLink>
        )}
      </NavLinks>


    </Wrapper>
  );
}

export default NavBar;
