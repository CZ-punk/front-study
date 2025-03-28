import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/loading-screen";
import { styled } from "styled-components";
import ProtectedRoute from "./components/protected-route";
import OAuth2Callback from "./routes/oauth2-callback";
import useUserStore, { loadUserInfo } from './store/useUserStore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/login/oauth2/callback",
    element: <OAuth2Callback />
  },
  {
    path: "/protect",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
    children: [
      {
        path: "/protect/profile",
        element: <Profile />
      }
    ]
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loadUserInfo = useUserStore((state) => state.loadUserInfo);

  useEffect(() => {
    const init = async () => {
      await loadUserInfo();
      setIsLoading(false);
    };

    init();
  }, [loadUserInfo]);

  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
