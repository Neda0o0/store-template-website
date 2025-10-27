import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Best Furniture collection for your interior ",
      subTitle: 'welcome to chairs'
      image: '/src/assets/Banner/banner_image.png'
    },
    {
      id: 2,
      title: "Best Furniture collection for your interior ",
      subTitle: 'welcome to chairs'
      image: '/src/assets/Banner/banner_image.png'
    },
    {
      id: 3,
      title: "Best Furniture collection for your interior ",
      subTitle: 'welcome to chairs'
      image: '/src/assets/Banner/banner_image.png'
    },
    {
      id: 4,
      title: "Best Furniture collection for your interior ",
      subTitle: 'welcome to chairs'
      image: '/src/assets/Banner/banner_image.png'
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:container ">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Banner;
