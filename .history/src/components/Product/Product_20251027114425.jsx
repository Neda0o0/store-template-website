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
      <div className="flex flex-col items-center justify-center">
        <SectionTitle
          title={"our Product"}
          textAlign={"center"}
          mb={"mb-5"}
        ></SectionTitle>

        <div className="flex items-center justify-center gap-6">
          {productTitle?.map((title, index) => (
            <button key={title?.id} className="">
              {title?.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
