import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const Content: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default Content;
