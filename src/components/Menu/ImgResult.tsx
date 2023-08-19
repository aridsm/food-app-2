import { useState } from "react";

const ImgResult: React.FC<{ name: string; path: string }> = ({
  name,
  path,
}) => {
  const [img, setImg] = useState("");

  async function loadImage() {
    await import(`/src/assets/imgs/imgs-menu/${path}.jpg`).then((module) => {
      setImg(module.default);
    });
  }
  loadImage();

  return (
    <div className="w-full sm:h-48 xl:h-56 rounded-md overflow-hidden mb-3">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImgResult;
