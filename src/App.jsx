import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";
import Denied from "./Pages/Denied";
import AddProduct from "./Pages/Admin/Addproduct";
import ProductDetails from "./Pages/Products/ProductDetails";
import CartDetails from "./Pages/Cart/CartDetails";
import Order from "./Pages/Order/Order";
import OrderSuccess from "./Pages/Order/OrderSuccess";
import RequireAuth from "./Components/Auth/RequireAuth";
import ProductPage from "./Pages/Products/ProductPage";
import MenuPage from "./Pages/MenuPage";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/order/success" element={<OrderSuccess />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>

        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
