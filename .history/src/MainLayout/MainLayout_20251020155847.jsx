import { BrowserRouter } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
export default MainLayout;
