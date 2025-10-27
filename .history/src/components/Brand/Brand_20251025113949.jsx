const Brand = () => {
  const brands = [
    {
      id: 1,
      image: "/src/assets/brands/brand_1.png",
    },
    {
      id: 2,
      image: "/src/assets/brands/brand_2.png",
    },
    {
      id: 3,
      image: "/src/assets/brands/brand_3.png",
    },
    {
      id: 4,
      image: "/src/assets/brands/brand_4.png",
    },
    {
      id: 5,
      image: "/src/assets/brands/brand_5.png",
    },
  ];
  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-7 "></div>
    </div>
  );
};
export default Brand;
