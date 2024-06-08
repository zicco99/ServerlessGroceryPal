import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Secret from "./pages/Secret.tsx";
import { Layout } from "./Layout.tsx";
import Profile from "./pages/Profile.tsx";
import { AxiosProvider } from "./providers/axios.tsx";
import Scan from "./pages/Scan.tsx";

const App = () => {
  return (
    <>
    <AxiosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Scan />} />
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="secret" element={<Secret />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AxiosProvider>
    </>
  );
};

export default App;
