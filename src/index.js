import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { ProductsProvider } from "./context/products.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./util/stripe/stripe";
import { CartProvider } from "./context/cart.context.jsx";
import theme from "./util/theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <Elements stripe={stripePromise}>
                <App />
              </Elements>
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
