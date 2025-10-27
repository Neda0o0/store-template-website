import Banner from "../../components/Banner/Banner";
import Delivery from "../../components/Delivery/Delivery";
import Brand from "../../components/Brand/Brand";
import Features from "../../components/Features/Features";
import Categories from "../../components/Categories/Categories";
import Product from "../../components/Product/Product";
import Client from "../../components/Client/Client";
import Recent from "../../components/Recent/Recent";
const Home = () => {
  return (
    <div>
      {/* banner component */}
      <div className="w-full rounded-b-3xl bg-[#f0f2f3] min-h-[85px] flex items-center justify-center ">
        <Banner></Banner>
      </div>
      {/* delivery component */}
      <div className="delivery_component w-full min-h[#150px]  ">
        <Delivery></Delivery>
      </div>

      {/* brand component */}
      <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
        <Brand></Brand>
      </div>
      {/* features component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features></Features>
      </div>
      {/* Categories component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Categories></Categories>
      </div>
      {/* product component */}
      <div className="w-full flex items-center justify-center pb-[80px]">
        <Product></Product>
      </div>
      {/* client say component */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px]">
        <Client></Client>
      </div>
      {/* recent component */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px]">
        <Recent></Recent>
      </div>
    </div>
  );
};
export default Home;
