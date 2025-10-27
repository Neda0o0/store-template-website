import { Armchair, Check, Info } from "lucide-react";
import { Link } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar_top flex items-center justify-center bg-[#272343] w-full h-[45px]">
        <div className="lg:container flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check />
            Free on all orders over $50
          </p>
          <div className="navbar_top_right">
            <select
              defaultValue="Server location"
              className=" bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white"
            >
              <option>eng</option>
              <option>Farsi</option>
            </select>
            <button>
              <Link>Faqs</Link>
            </button>
            <button className="text-sm text-white font-inter font-normal capitalize ">
              <Info />
              <Link>need help</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
