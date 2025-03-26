import useUserStore from "../store/useUserStore";

const Profile = () => {
    const { userInfo } = useUserStore();

    return (
        <div>
            <p>id: {userInfo?.id}</p>        
            <p>username: {userInfo?.name}</p>        
        </div>
    )
}

export default Profile;