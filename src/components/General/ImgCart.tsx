import { useState } from "react";

const ImgCart: React.FC<{ name: string; path: string }> = ({ name, path }) => {
  const [img, setImg] = useState("");

  async function loadImage() {
    await import(`/src/assets/imgs/imgs-menu/${path}.jpg`).then((module) => {
      setImg(module.default);
    });
  }
  loadImage();

  return (
    <div className="basis-10 h-10 sm:basis-28 sm:h-24 md:basis-36 md:h-32 rounded-md overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImgCart;
