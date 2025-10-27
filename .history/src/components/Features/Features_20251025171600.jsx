import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
      image: "/src/assets/features/product_2.png",
    },
    {
      title: "library stool Chair",
      price: "$250",
      image: "/src/assets/features/product_3.png",
    },
    {
      title: "library stool Chair",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_4.png",
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
