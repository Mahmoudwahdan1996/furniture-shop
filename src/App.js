import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Products,
  SingleProduct,
  CartPage,
  ErrorPage,
  PrivateRoute,
  CheckoutPage,
  AuthWrapper,
} from "./pages";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/products' exact component={Products} />
          <Route path='/products/:id' exact component={SingleProduct} />
          <Route path='/cart' exact component={CartPage} />
          <PrivateRoute path='/checkout' exact>
            <CheckoutPage />
          </PrivateRoute>
          <Route path='*' exact component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
