import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Layout from "../components/General/Layout";

const Content: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
