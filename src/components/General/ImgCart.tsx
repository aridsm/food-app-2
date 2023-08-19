const ImgCart: React.FC<{ name: string; path: string }> = ({ name, path }) => {
  return (
    <div className="basis-10 h-10 sm:basis-28 sm:h-24 md:basis-36 md:h-32 rounded-md overflow-hidden">
      <img src={path} alt={name} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImgCart;
