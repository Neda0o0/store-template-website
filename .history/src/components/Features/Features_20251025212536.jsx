import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$200",
    },
    {
      title: "library stool Chair",
      status: "Sales",
      price: "$250",
      image: "/src/assets/features/product_1.png",
    },
    {
      title: "library stool Chair",
      price: "$250",
      image: "/src/assets/features/product_1.png",
    },
    {
      title: "library stool Chair",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$200",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Featured Products" mb="mb-11"></SectionTitle>
        <div className="slider-container features_slider w-full h-full ">
          <Slider {...settings}>
            {features?.map((feature, index) => (
              <div key={index}>
                <div className="feature_image">
                  <img src={feature?.image} alt={feature?.title} />
                  {feature?.status && (
                    <span className="status">
                      <div>
                        <button>{feature?.status}</button>
                      </div>
                    </span>
                  )}
                </div>
                <div className="feature_content">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base text-[#007580] capitalize">
                      {feature?.title}
                    </h4>
                    <span>
                      <ShoppingCart />
                    </span>
                  </div>
                  <p>
                    {feature?.price}
                    {feature?.currentPrice && (
                      <span>{feature?.currentPrice}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Features;
