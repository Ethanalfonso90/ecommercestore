import Home from "./routes/home/home.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import Shop from "./components/shop/shop.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/signin/signinwithgoogle.jsx";
import PaymentForm from "./components/paymentform/paymentform";
import Checkout from "./components/checkout/checkout.jsx";
import ShopAll from "./components/shop/shopall";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route exact path="shop" element={<ShopAll />} />
        <Route exact path="shop/:title" element={<Shop />} />
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="payment" element={<PaymentForm />} />
        <Route path="*" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
