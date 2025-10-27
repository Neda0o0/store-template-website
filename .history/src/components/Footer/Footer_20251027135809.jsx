import { Armchair } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top"></div>
      <div className="footer_bottom mx-h-[343px] w-full border-t border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div>
            {/* logo wrapper */}
            <div className="logo_wrapper">
              <Link
                to="/"
                className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
              >
                <Armchair size="2rem" color="#029fae" /> Comforty
              </Link>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              inventore excepturi accusamus quibusdam ipsam cumque quidem
              nesciunt commodi nostrum magnam?
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
