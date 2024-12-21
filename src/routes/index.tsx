// Pages Component
import Home from "pages/Home";
import Index from "pages";
import Product from "pages/Product";
import { Layout } from "components/Layout";
import ProductId from "pages/Product/Id/index";
import CreateProduct from "pages/Product/Create";
import Profile from "pages/Profile/index";
import HOMEPAGE from "pages/Homepage";
import FOOD from "pages/Food/FOOD";


// Library
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route index path="/" element={<Index />} />
      <Route element={<Layout />}>
        <Route index path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="homepage" element={<HOMEPAGE />} />
        <Route path="food" element={<FOOD />} />
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
