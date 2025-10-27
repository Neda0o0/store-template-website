import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Home from "../Pages/Home/Home";

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MainLayout;
