import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      title: "Wing Chair",
      products: "3,584 Products",
      image: "/src/assets/categories/categories_1.png",
    },
    {
      title: "Wooden Chair",
      products: "157 Products",
      image: "/src/assets/categories/categories_1.png",
    },
    {
      title: "desk Chair",
      products: "154 Products",
      image: "/src/assets/categories/categories_1.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Top Categories" mb="mb-11"></SectionTitle>
        <div className="slider-container features_slider w-full h-full ">
          <Slider {...settings}>
            {categories?.map((feature, index) => (
              <div key={index} className="p-4">
                <div className="feature_image mb-4 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={categories?.image}
                    alt={categories?.title}
                  />
                  <div></div>
                </div>
                {/* <div className="feature_content">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                      {feature?.title}
                    </h4>
                    <span className="bg-[#007580] w-[44px] h-[44px] rounded-lg flex items-center justify-center">
                      <ShoppingCart size="1.5rem" color="#fff" />
                    </span>
                  </div>
                  <p className="text-xl flex items-center gap-2 text-[#272343] font-inter font-semibold">
                    {feature?.price}
                    {feature?.currentPrice && (
                      <span className="text-sm text-[#9a9caa] font-inter font-normal">
                        {feature?.currentPrice}
                      </span>
                    )}
                  </p>
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Categories;
