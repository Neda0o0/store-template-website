import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from '../Pages/Auth/Login/Login';

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login/>}/>
          <Route path="" element={} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MainLayout;
