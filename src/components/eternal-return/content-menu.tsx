import styled from "styled-components";


export const Wrapper = styled.div`
    flex: 1;
    width: 100%;
`

export const Nav = styled.nav`
    background-color: #263f3f;
    color: #ffffff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 16px;
    boarder: 1px solid #2f4f4f;
`

export const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
`

export const NavItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const NavItem = styled.a`
    color: #ffffff;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding: 0.5rem 1rem; 
    border-radius: 20px; 
    border: 1px solid transparent;
    text-decoration: none;

    &:hover {
        color: #ddd;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid #64ffda; 
        cursor: pointer;
    }
`
const ERMenu: React.FC = () => {

    return (
        <Wrapper>
            <Nav>
                <Logo>Eternal-Return</Logo>
                <NavItemWrapper>
                    <NavItem href="/eternal-return">
                        ER Home
                    </NavItem>
                    <NavItem href="/eternal-return">
                        Weapon
                    </NavItem>
                    <NavItem href="/eternal-return/test">
                        Test Player Detail
                    </NavItem>
                    <NavItem >
                        Exp
                    </NavItem>
                    <NavItem>
                        Level Up Stat
                    </NavItem>
                </NavItemWrapper>


            </Nav>



        </Wrapper>


    )

}


export default ERMenu;