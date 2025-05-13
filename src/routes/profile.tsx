import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import styled from "styled-components";

import { useApi } from "../api/useApi";
import DeleteMemberById from "../api/member/deleteMember";
import { AxiosError } from "axios";
import UpdateMember, { UpdateMemberDto } from "../api/member/updateMember";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    padding: 0 20px;
    min-height: 80vh;
    margin: 0 auto;
    max-width: 1060px;    
    width: 80%;
`;

export const MenuWrapper = styled.div`
    flex: 1;
    padding: 20px;
    margin-top: 50px;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-color: #2f2f2f; 
    width: 60%;
    height: 60%;
    margin: 0 auto;
    padding: 20px; 
    border-radius: 20px;
    border: 1px solid darkgray;
`
export const MenuItem = styled.div`
    text-decoration: none;
    width: auto;
    max-width: 80%;
    height: auto;
    color: #ffffff;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding: 0.5rem 1rem; 
    border-radius: 20px; 
    border: 1px solid #f0f8ff;
    margin: 1rem;
    &:hover {
        color: #ddd;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid #64ffda; 
        cursor: pointer;
    }

    &.cancelMember {
        color: tomato;
    }
`;

export const DetailWrapper = styled.div`
    flex: 1;
    padding: 20px;
    margin-top: 50px;
`

export const DetailProfile = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #2f2f2f; 
    width: auto;
    height: 80%;
    margin: 1rem;
    margin: 0 auto;
    padding: 20px;
    
    border-radius: 20px; 
    border: 1px solid darkgray;
`;

export const DetailProfileItem = styled.span`
    margin: 1rem;
    padding: 15px;
    border: 1px solid #ccc; 
    border-radius: 5px; 
    background-color: #2f2f2f;
    
`;

export const DetailProfileInput = styled.input`
    background-color: black;
    font-size: 16px;
    color: white;
    margin-left: 10px;
    border-radius: 20px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding: 20px;
`;

export const DetailProfileEditButton = styled.input`
    background-color: black;
    text-decoration: none;
    font-size: 16px;
    color: #ffffff;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding: 0.5rem 1rem; 
    border-radius: 20px; 
    border: 1px solid transparent;
    width: 40%;
    heigth: auto;

    &:hover {
        color: #ddd;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid #64ffda; 
        cursor: pointer;
    }
`

const Profile = () => {
    const api = useApi();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const { isLogin, userInfo, clearUserInfo, updateUsername } = useUserStore();
    const [username, setUsername] = useState<string>(userInfo?.name || "");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!isLogin || !userInfo) {
            navigate('/');
        }
    })

    const validation = (name: string) => {
        if (name === null) {
            setErrorMessage('not empty name');
            return true;
        } else if (name.length <= 1) {
            setErrorMessage('min length 2');
            return true;
        } else if (userInfo?.name === name) {
            setErrorMessage("not edit name");
            return true;
        } else {
            return false;
        }
    }

    const updateMember = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (validation(username)) {
                return;
            }

            if (isLogin && userInfo) {
                const ok = confirm(`Do you change username to ${username}?`)
                if (ok) {
                    setIsLoading(true);
                    const dto: UpdateMemberDto = { username: username }
                    const response = await UpdateMember(api, Number(userInfo.id), dto);
                    updateUsername(response.data.username)
                }
                return;
            }
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                if (error.response) {
                    setErrorMessage(error.response.data.data);
                    // alert(error.response.data.data);
                    console.log(error.response);
                }

            }
        } finally {
            setIsLoading(false);
        }
    }

    const deleteMember = async () => {
        try {
            setIsDeleting(true);
            const ok = confirm('Delete member?');
            if (ok) {
                if (isLogin && userInfo) {
                    await DeleteMemberById(api, userInfo.id);
                }
                alert("Success Delete Member");
                clearUserInfo();
                navigate('/');
            }
        } catch (error) {
            console.log('BadRequest OR ServerError');
            if (error instanceof AxiosError) {
                if (error.response)
                    alert(error.response.data.data);
            }
        } finally {
            setIsDeleting(false);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    return (
        <Wrapper>
            <MenuWrapper>
                <Menu>
                    <MenuItem>User Infomation</MenuItem>
                    <MenuItem className="cancelMember" onClick={deleteMember}>{isDeleting ? "Deleting..." : "Delete Member"}</MenuItem>
                </Menu>
            </MenuWrapper>

            <DetailWrapper>
                <DetailProfile onSubmit={e => updateMember(e)}>
                    <DetailProfileItem>ID:
                        <DetailProfileInput defaultValue={userInfo?.id} readOnly />
                    </DetailProfileItem>
                    <DetailProfileItem>Username:
                        <DetailProfileInput onChange={onChange} defaultValue={username} />
                    </DetailProfileItem>
                    {errorMessage !== "" ? errorMessage : null}
                    <ButtonContainer>
                        <DetailProfileEditButton type="submit" value={isLoading ? "Editing..." : "Edit Member"} />
                    </ButtonContainer>

                </ DetailProfile>
            </DetailWrapper>
        </Wrapper >

    )
}

export default Profile;