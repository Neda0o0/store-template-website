import SectionTitle from "../SectionTitle/SectionTitle";

const Product = () => {
  const productTitle = [
    {
      id: 0,
      title: "all",
      Product: "all",
    },
    {
      id: 1,
      title: "newest",
      Product: "newest",
    },
    {
      id: 2,
      title: "trending",
      Product: "trending",
    },
    {
      id: 3,
      title: "best seller",
      Product: "best seller",
    },
  ];

  return (
    <div className="lg:container mx-auto">
      <div className="flex items-center justify-center">
        <SectionTitle
          title={"our Product"}
          textAlign={"center"}
          mb={"mb-5"}
        ></SectionTitle>

        {}
      </div>
    </div>
  );
};
export default Product;
