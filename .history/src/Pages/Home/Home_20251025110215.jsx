import Banner from "../../components/Banner/Banner";
import Delivery from "../../components/Delivery/Delivery";
const Home = () => {
  return (
    <div>
      {/* banner component */}
      <div className="w-full rounded-b-3xl bg-[#f0f2f3] min-h-[85px] flex items-center justify-center ">
        <Banner></Banner>
      </div>
      {/* delivery component */}
      <div className="delivery_component w-full min-h[#150px] bg-white ">
        <Delivery></Delivery>
      </div>
    </div>
  );
};
export default Home;
