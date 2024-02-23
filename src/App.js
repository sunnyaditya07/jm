import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ProductPage from "./components/product/ProductPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import DownloadApp from "./components/reusable/DownloadApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product/:id/checkout" element={<CheckoutPage />} />
        <Route path="/download/app" element={<DownloadApp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
