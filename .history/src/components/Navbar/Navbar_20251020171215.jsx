import { Armchair, Check } from "lucide-react";
// import { Link } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar_top flex items-center justify-center bg-[#272343] w-full h-[45px]">
        <div className="lg:container">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check />
            Free on all orders over $50
          </p>
          <div className="navbar_top_right">
            <select
              defaultValue="Server location"
              className=" bg-none h-[30px] w-[37px] text-sm font-inter font-normal capitalize text-white"
            >
              <option disabled={true}>eng</option>
              <option>Farsi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
