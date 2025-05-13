import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./routes/home";
import Profile from "./routes/profile";

import { GlobalStyles } from "./style/GlobalStyles";

import LoadingScreen from "./components/loading-screen";
import TimeLine from "./routes/timeline";

import useUserStore from './store/useUserStore';
import Layout from "./components/layout";
import Login from "./routes/login";
import OAuth2Callback from "./util/oauth2-callback";
import CreateAccount from "./routes/create-account";
import EternalReturn from "./routes/eternal-return";
import EternalReturnMain from "./components/eternal-return/main/eternal-return-main";
import EternalReturnPlayerDetail from "./components/eternal-return/detail/eternal-return-player-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/eternal-return",
    element: <Layout><EternalReturn /></Layout>,
    children: [
      {
        path: "",
        element: <EternalReturnMain />
      },
      {
        path: "test",
        element: <EternalReturnPlayerDetail />
      },
    ]
  },
  {
    path: "/timeline",
    element: <Layout><TimeLine /></Layout>,
  },
  {
    path: "/login",
    element: <Layout><Login /></Layout>,
  },
  {
    path: "/create-account",
    element: <Layout><CreateAccount /></Layout>
  },
  {
    path: "/login/oauth2/callback",
    element: <Layout><OAuth2Callback /></Layout>
  },
  {
    path: "/profile",
    element: <Layout><Profile /></Layout>
  },
]);

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
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;