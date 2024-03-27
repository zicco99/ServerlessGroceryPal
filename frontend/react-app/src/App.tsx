import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Secret from "./pages/Secret.tsx";
import { Layout } from "./Layout.tsx";
import Profile from "./pages/Profile.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="secret" element={<Secret />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
