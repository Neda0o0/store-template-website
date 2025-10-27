import SectionTitle from "../SectionTitle/SectionTitle";

const Product = () => {
  const productTitle = [
    {
      id: 0,
      title: "all ",
      Product: "all",
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
