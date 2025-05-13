import { create } from 'zustand';
import Cookies from 'js-cookie';

export interface UserInfo {
    id: string;
    name: string;
    accessToken: string;
    refreshToken: string;
    profileImageUrl: string;
}

interface UserStore {
    userInfo: UserInfo | null;
    isLogin: boolean;

    setUserInfo: (userInfo: UserInfo) => void;
    updateUsername: (name: string) => void;
    clearUserInfo: () => void;
    loadUserInfo: () => void;
}

const useUserStore = create<UserStore>((set) => ({
    userInfo: null,
    isLogin: false,

    setUserInfo: (userInfo) => {
        localStorage.setItem('id', userInfo.id);
        localStorage.setItem('name', userInfo.name);
        localStorage.setItem('accessToken', userInfo.accessToken);
        localStorage.setItem('refreshToken', userInfo.refreshToken);
        localStorage.setItem('profileImageUrl', userInfo.profileImageUrl);
        
        set({ userInfo, isLogin: true });
    },
    updateUsername: (username) => {
        set((state) => {
            if (state.userInfo) {
                const updatedUserInfo = {
                    ...state.userInfo,
                    name: username,
                };
                localStorage.setItem('name', username);
                return { userInfo: updatedUserInfo };
            }
            return state;
        })
    },
    clearUserInfo: () => {
        localStorage.clear();
        Object.keys(Cookies.get()).forEach((cookieName) => Cookies.remove(cookieName));
        set({ userInfo: null, isLogin: false });
    },
    loadUserInfo: async () => {
        try {
            const id = localStorage.getItem('id');
            const name = localStorage.getItem('name');
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');
            const profileImageUrl = localStorage.getItem('profileImageUrl');

            if (id && name && accessToken && refreshToken && profileImageUrl) {
                set({ userInfo: { id, name, accessToken, refreshToken, profileImageUrl }, isLogin: true });
            }
        } catch (error) {
            console.error('Error loading user info:', error);
        }
    },
}))

export const useUserInfo = () => {
    const userInfo = useUserStore((state) => state.userInfo);
    const isLogin = useUserStore((state) => state.isLogin);
    return { userInfo, isLogin };
};


export default useUserStore;