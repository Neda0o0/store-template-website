import SectionTitle from "../SectionTitle/SectionTitle";

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
  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Featured Products" mb="mb-11"></SectionTitle>
      </div>
    </div>
  );
};
export default Features;
