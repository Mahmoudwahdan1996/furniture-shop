import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsState from "./context/products/ProductsState";
import FilterState from "./context/filter/FilterState";
import CartState from "./context/cart/CartState";
import { Auth0Provider } from "@auth0/auth0-react";
import UserState from "./context/user/UserState";

ReactDOM.render(
  <Auth0Provider
    domain='dev-vvnq5zfj.us.auth0.com'
    clientId='DnoVYAnIHylf7Szg9yH8aOVhxr8NbA2v'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserState>
      <ProductsState>
        <FilterState>
          <CartState>
            <App />
          </CartState>
        </FilterState>
      </ProductsState>
    </UserState>
  </Auth0Provider>,
  document.getElementById("root")
);
