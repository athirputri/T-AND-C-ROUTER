// Pages Component
import Product from "pages/Product";
import ProductId from "pages/Product/Id/index";
import CreateProduct from "pages/Product/Create";
import Profile from "pages/Profile/PROFILE";
import HOMEPAGE from "pages/Homepage";
import FOOD from "pages/Food/Food.tsx";
import CHECKOUT from "pages/CHECKOUT/CHECKOUT";


// Library
import { Route, Routes } from "react-router-dom";
import CRAFT from "pages/Craft/CRAFT";

const Routing = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HOMEPAGE />} />
        <Route path="food" element={<FOOD />} />
        <Route path="profile" element={<Profile />} />
        <Route path="checkout" element={<CHECKOUT />} />
        <Route path="craft" element={<CRAFT />} />
        <Route path="product">
          <Route index element={<Product />} />
          <Route path=":id" element={<ProductId />} />
          <Route path="create" element={<CreateProduct />} />
        </Route>
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};

export default Routing;
