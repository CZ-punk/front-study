import { useState, createContext, ReactNode, useContext, useEffect } from 'react';
import Cookies from "js-cookie";

interface AuthContextType {
  isLogin: boolean;
  user: { id: string, name: string } | null;
  login: (userInfo: { id: string, name: string, accessToken: string, refreshToken: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ id: string, name: string } | null>(null);


  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    const memberId = Cookies.get('memberId');
    const name = Cookies.get('name');
    if (accessToken && refreshToken && memberId && name) {
      setIsAuthenticated(true);
      setUser({ id: memberId, name: name });
      return;
    }
    setIsAuthenticated(false);
  }, [])

  const login = (userInfo: { id: string, name: string, accessToken: string, refreshToken: string }) => {
    setIsAuthenticated(true);
    setUser({ id: userInfo.id, name: userInfo.name });
    Cookies.set('accessToken', userInfo.accessToken);
    Cookies.set('refreshToken', userInfo.refreshToken);
    Cookies.set('id', userInfo.id);
    Cookies.set('name', userInfo.name);
  }

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('id');
    Cookies.remove('name');
  }

  return (
    <AuthContext.Provider value={{ isLogin: isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within a LoginProvider');
  }
  return context;
};
