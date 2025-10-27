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
