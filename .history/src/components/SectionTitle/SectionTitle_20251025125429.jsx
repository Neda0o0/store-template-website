const SectionTitle = (title, mb) => {
  const mb = mb || "mb-8";
  return (
    <div>
      <h3
        className={`text-3xl text-[#272343] font-semibold font-inter capitalize {mb}`}
      >
        {title}
      </h3>
    </div>
  );
};
export default SectionTitle;
