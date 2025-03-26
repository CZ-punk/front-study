import { create } from 'zustand';
import Cookies from 'js-cookie';

export interface UserInfo {
    id: string;
    name: string;
    accessToken: string;
    refreshToken: string;
}

interface UserStore {
    userInfo: UserInfo | null;
    isLogin: boolean;

    setUserInfo: (userInfo: UserInfo) => void;
    clearUserInfo: () => void;
    loadUserInfo: () => void;
}

const useUserStore = create<UserStore>((set) => ({
    userInfo: null,
    isLogin: false,

    setUserInfo: (userInfo) => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        set({ userInfo, isLogin: true });
    },
    clearUserInfo: () => {
        localStorage.removeItem('userInfo');
        Object.keys(Cookies.get()).forEach((cookieName) => Cookies.remove(cookieName));

        set({ userInfo: null, isLogin: false });
    },
    loadUserInfo: async () => {
        try {
            const storedUserInfo = localStorage.getItem('userInfo');
            if (storedUserInfo) {
                set({ userInfo: JSON.parse(storedUserInfo), isLogin: true });
            }
        } catch (error) {
            console.error('Error loading user info:', error);
        }
    }
}))

export const useUserInfo = () => {
    const userInfo = useUserStore((state) => state.userInfo);
    const isLogin = useUserStore((state) => state.isLogin);
    return { userInfo, isLogin };
};

export const loadUserInfo = () => {
    const loadUserInfo = useUserStore((state) => state.loadUserInfo());
    return {loadUserInfo};
}


export default useUserStore;