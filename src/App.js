import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//Pages//

import Page from "../src/components/Pages/MainPage";
import NotFound from "./components/Pages/pageNotFound/PageNotFound";
import MainScreen from "../src/components/accounts/mainScreen";
import Login from "../src/components/accounts/Login";
import Register from "../src/components/accounts/registerPages/RegisterMain";
import RegisterUser from "../src/components/accounts/registerPages/registerUser";
import RegisterWarehouse from "../src/components/accounts/registerPages/registerWarehouse";
import RegisterLogistics from "../src/components/accounts/registerPages/registerLogistics";
import RegisterSeller from "../src/components/accounts/registerPages/registerSeller";
import Cart from "./components/Pages/CartCss/cart";
import RFQ from "../src/components/Pages/rfq";
import Wishlist from "../src/components/Pages/wishlist";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route exact path="/MyAccount" component={MainScreen} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/Signin" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/RFQ" component={RFQ} />
          <Route exact path="/Wishlist" component={Wishlist} />
          <Route
            exact
            path="/IndividualRegistration"
            component={RegisterUser}
          />
          <Route
            exact
            path="/WarehouseRegistration"
            component={RegisterWarehouse}
          />
          <Route exact path="/CompanyReg" component={RegisterLogistics} />
          <Route
            exact
            path="/ProductSellerRegistration"
            component={RegisterSeller}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
