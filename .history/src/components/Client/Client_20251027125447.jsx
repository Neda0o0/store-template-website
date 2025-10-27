import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      name: "Neda",
      position: "CEO, Company",
    },
    {
      id: 2,
      description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      name: "Neda",
      position: "CEO, Company",
    },
    {
      id: 3,
      description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      name: "Neda",
      position: "CEO, Company",
    },
    {
      id: 4,
      description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      name: "Neda",
      position: "CEO, Company",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:container mx-auto">
      <SectionTitle
        title="what is client says about us"
        mb="mb-11"
      ></SectionTitle>
      <div className="slider-container features_slider w-full h-full ">
        <Slider {...settings}>
          {clientSays?.map((client, index) => (
            <div key={index} className="p-4">
              <p>{client?.description}</p>
              <div className="flex items-center">
                <h4>
                  <User />
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Client;
