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
    }
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
         {
            products?.map((product) => (
                <div key={product?.id} >
                    {/* banner text */}
                    <div className="banner_text">
                        <p>{product?.subTitle}</p>
                        <h3>{product?.title}</h3>
                        <button>shop</button>
                    </div>
                </div>
            ))
         }
        </Slider>
      </div>
    </div>
  );
};
export default Banner;
