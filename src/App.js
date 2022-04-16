import Home from "./routes/home/home.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import Shop from "./components/shop/shop.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/signin/signinwithgoogle.jsx";
import PaymentForm from "./components/paymentform/paymentform";
import Checkout from "./components/checkout/checkout.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="payment" element={<PaymentForm />} />
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
