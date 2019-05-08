import React, { Component } from "react";
import "./component.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { fetchUser } from "../actions/userAction";

import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Products from "./Products/Products";
import Crm from "./Crm/Crm";
import CashRegister from "./Cash_Register/Cash_Register";
import Deals from "./Deals/Deals";
import Buy from "./Deals/Buy";
import Sell from "./Deals/Sell";
import Return from "./Deals/Return";
import DealHistory from "./DealHistory/DealHistory";
import Monetary from "./Monetary/Monetary";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTachometerAlt,
  faChartLine,
  faBox,
  faUsers,
  faMoneyBill,
  faHandHoldingUsd,
  faHandshake,
  faShoppingCart,
  faCog,
  faChessPawn,
  faChartArea,
  faBars,
  faMinus,
  faPlus,
  faTrash,
  faStar,
  faSignInAlt,
  faSignOutAlt,
  faLevelUpAlt,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTachometerAlt,
  faChartLine,
  faBox,
  faUsers,
  faMoneyBill,
  faHandHoldingUsd,
  faHandshake,
  faShoppingCart,
  faCog,
  faChessPawn,
  faChartArea,
  faBars,
  faMinus,
  faPlus,
  faTrash,
  faStar,
  faSignInAlt,
  faSignOutAlt,
  faLevelUpAlt,
  faEllipsisH
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "az"
    };
  }

  componentDidMount() {
    // this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="h100">
          {/* <Switch> */}
          <Header
            lang={this.state.lang}
            setActiveLanguage={lang => this.setState({ lang })}
          />
          <Sidebar lang={this.state.lang} />
          <div className="background">
            <Route exact path={"/"} component={Landing} />
            <Route path={"/dashboard"} component={Dashboard} />
            <Route path={"/products"} component={Products} />
            <Route path={"/crm"} component={Crm} />
            <Route exact path={"/deals"} component={Deals} />
            <Route path={"/deals/buy"} component={Buy} />
            <Route path={"/deals/sell"} component={Sell} />
            <Route path={"/deals/return"} component={Return} />
            <Route path={"/cash-register"} component={CashRegister} />
            <Route path={"/deal-history"} component={DealHistory} />
            <Route path={"/Monetary"} component={Monetary} />
          </div>
          {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null
  // { fetchUser }
)(App);

// import * as actions from "../actions";

// export default connect(
//   null,
//   actions
// )(App);
