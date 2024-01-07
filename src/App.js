import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import HomePage from "./customer/pages/HomePage/HomePage";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Orders/Order";
import OrderDetails from "./customer/components/Orders/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
