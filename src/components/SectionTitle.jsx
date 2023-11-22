const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-pink-300 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize text-pink-600">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
