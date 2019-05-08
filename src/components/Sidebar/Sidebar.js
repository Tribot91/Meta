import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css/dist/js/materialize";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MobilePageButton from "./MobilePageButton";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.tabs = [
      //path, icon, pageName
      // ["/boss", "chess-pawn", "Patron"],
      ["/dashboard", "tachometer-alt", "Dashboard"],
      ["/products", "box", "Ürünler"],
      ["/crm", "users", "CRM"],
      ["/deals", "handshake", "İşlemler"],
      ["/deal-history", "money-bill", "İşlem geçmişi"],
      ["/monetary", "hand-holding-usd", "Para işlemleri"],
      ["/cash-register", "shopping-cart", "Kasa"],
      ["/statistics", "chart-area", "İstatistikler"]
    ];
  }

  componentDidMount() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    return (
      <div>
        <div className="sidenav sidenav-fixed pc-sidenav">
          <div>
            {this.tabs.map(tab => {
              return (
                <NavLink
                  key={tab[0]}
                  className="waves-effect icon center-align"
                  activeClassName="activeTab"
                  to={tab[0]}
                >
                  <FontAwesomeIcon className="fa" icon={tab[1]} size="3x" />
                  {tab[2]}
                </NavLink>
              );
            })}
          </div>
          <div>
            <NavLink
              className="waves-effect icon center-align"
              activeClassName="activeTab"
              to={"/settings"}
            >
              <FontAwesomeIcon className="fa" icon="cog" size="3x" />
              Ayarlar
            </NavLink>
          </div>
        </div>

        <ul className="sidenav mobile-sidenav" id="mobile-demo">
          {this.tabs.map(tab => {
            return (
              <MobilePageButton key={tab[0]} href={tab[0]} pageName={tab[2]} />
            );
          })}
          <MobilePageButton href="settings" pageName="Ayarlar" />
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
