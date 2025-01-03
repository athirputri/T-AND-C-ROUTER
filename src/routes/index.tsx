// Pages Component
// import Product from "pages/Product";
// import ProductId from "pages/Product/Id/index";
// import CreateProduct from "pages/Product/Create";
import Profile from "pages/Profile/PROFILE";
import HOMEPAGE from "pages/Homepage/HOMEPAGE";
import FOOD from "pages/Food/Food.tsx";
import CHECKOUT from "pages/CHECKOUT/CHECKOUT";
import CRAFT from "pages/Craft/CRAFT";
import CARTPRODUCT from "pages/Cart/CARTPRODUCT";
import CHECKOUTDONE from "pages/CHECKOUT/CHECKDONE/CHECKOUTDONE";
import PRODUCT from "pages/Product/PRODUCT";

// import SIGNIN from "pages/Sign in/SIGNIN";
// import LOGIN from "pages/Login/LOGIN";

// Library
import { Route, Routes } from "react-router-dom";


const Routing = () => {
  return (
    <Routes>
      <Route>
        {/* <Route path="signin" element={<SIGNIN />} /> */}
        {/* <Route path="login" element={<LOGIN />} /> */}
        <Route path="/" element={<HOMEPAGE />} />
        <Route path="food" element={<FOOD />} />
        <Route path="profile" element={<Profile />} />
        <Route path="checkout" element={<CHECKOUT />} />
        <Route path="checkdone" element={<CHECKOUTDONE />} />
        <Route path="cart" element={<CARTPRODUCT />} />
        <Route path="craft" element={<CRAFT />} />
        <Route path="product" element={<PRODUCT />} />
          {/* <Route index element={<Product />} />
          <Route path=":id" element={<ProductId />} />
          <Route path="create" element={<CreateProduct />} /> */}
        {/* </Route> */}
      </Route>
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};

export default Routing;
