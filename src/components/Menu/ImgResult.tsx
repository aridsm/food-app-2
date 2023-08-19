const ImgResult: React.FC<{ name: string; path: string }> = ({
  name,
  path,
}) => {
  return (
    <div className="w-full sm:h-48 xl:h-56 rounded-md overflow-hidden mb-3">
      <img src={path} alt={name} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImgResult;
