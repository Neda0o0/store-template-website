// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { MoveRight } from "lucide-react";

// const Banner = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Best Furniture collection for your interior ",
//       subTitle: "welcome to chairs",
//       image: "/src/assets/Banner/banner_image.png",
//     },
//     {
//       id: 2,
//       title: "Best Furniture collection for your interior ",
//       subTitle: "welcome to chairs",
//       image: "/src/assets/Banner/banner_image.png",
//     },
//     {
//       id: 3,
//       title: "Best Furniture collection for your interior ",
//       subTitle: "welcome to chairs",
//       image: "/src/assets/Banner/banner_image.png",
//     },
//     {
//       id: 4,
//       title: "Best Furniture collection for your interior ",
//       subTitle: "welcome to chairs",
//       image: "/src/assets/Banner/banner_image.png",
//     },
//   ];
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="lg:container ">
//       <div className="slider-container w-full h-full">
//         <Slider {...settings}>
//           {products?.map((product) => (
//             <div key={product?.id} className="banner_slide_item">
//               {/* banner text */}
//               <div className="banner_text">
//                 <p className="text-sm font-inter font-normal text-[#272343] uppercase">
//                   {product?.subTitle}
//                 </p>
//                 <h3 className="text-6xl text-[#272343] font-inter capitalize leading-16 max-w-[631px] w-full font-bold mb-5">
//                   {product?.title}
//                 </h3>
//                 <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52] bg-[#029fae] rounded-lg cursor-pointer text-white capitalize">
//                   shop now <MoveRight />
//                 </button>
//               </div>

//               {/* banner image */}
//               <div className="banner_image w-full h-full flex items-center justify-end">
//                 <img
//                   className="w-[50%]"
//                   src={product?.image}
//                   alt={product?.title}
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };
// export default Banner;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Best Furniture Collection For Your Interior",
      subTitle: "Welcome To Chairs",
      image: "/src/assets/Banner/banner_image.png",
    },
    {
      id: 2,
      title: "Modern Furniture Collection For Your Home",
      subTitle: "Exclusive Designs",
      image: "/src/assets/Banner/banner_image.png",
    },
    {
      id: 3,
      title: "Elegant And Comfortable Furniture For Offices",
      subTitle: "Best Quality",
      image: "/src/assets/Banner/banner_image.png",
    },
    {
      id: 4,
      title: "Stylish Furniture For Modern Interiors",
      subTitle: "Luxury Comfort",
      image: "/src/assets/Banner/banner_image.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // فلش‌ها فعال
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="lg:container mx-auto px-4">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="banner_slide_item flex flex-col-reverse md:flex-row items-center justify-between w-full py-10 md:py-16"
            >
              {/* متن بنر */}
              <div className="banner_text flex-1 text-left space-y-5">
                <p className="text-sm font-inter font-medium text-[#272343] uppercase tracking-wide">
                  {product.subTitle}
                </p>
                <h3 className="text-4xl md:text-6xl text-[#272343] font-bold leading-tight max-w-[600px]">
                  {product.title}
                </h3>
                <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fae] rounded-lg cursor-pointer text-white capitalize hover:bg-[#027d8a] transition-all">
                  Shop Now <MoveRight size={20} />
                </button>
              </div>

              {/* تصویر بنر */}
              <div className="banner_image flex-1 relative flex items-center justify-end">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#e1e3e5] rounded-full -z-10"></div>
                <img
                  className="w-[90%] max-w-[500px] object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
