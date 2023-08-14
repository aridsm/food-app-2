import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Layout from "../components/General/Layout";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import NotFound from "./pages/NotFound/404";
import { useAppSelector } from "../store/hooks";

const Content: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="w-full">
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
          <Route path="/cart" element={<Cart />} />
          {cart.selectedItems.length && (
            <Route path="/payment" element={<Payment />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
