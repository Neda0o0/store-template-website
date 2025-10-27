import { Armchair, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top"></div>
      <div className="footer_bottom mx-h-[343px] w-full border-t border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4">
            <div>
              {/* logo wrapper */}
              <div className="logo_wrapper mb-7">
                <Link
                  to="/"
                  className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Armchair size="2rem" color="#029fae" /> Comforty
                </Link>
              </div>

              <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                inventore excepturi accusamus quibusdam ipsam cumque quidem
                nesciunt commodi nostrum magnam?
              </p>
              <div className="footer_social flex items-center gap-3">
                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]">
                  <Facebook size="1.5rem" color="#007580" />
                </Link>
                <Link className="p-3 inline-block">
                  <Twitter size="1.5rem" color="#007580" />
                </Link>
                <Link className="p-3 inline-block">
                  <Instagram size="1.5rem" color="#007580" />
                </Link>
                <Link className="p-3 inline-block">
                  <Youtube size="1.5rem" color="#007580" />
                </Link>
              </div>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium capitalize uppercase">
                category
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    sofa
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    armchair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    wing chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    desk chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    wooden chair
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    park bench
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium capitalize uppercase">
                support
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    help & support
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    tearms & condition
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    privary policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
