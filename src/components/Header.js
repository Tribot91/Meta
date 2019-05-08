import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

// import Buy from "./Deals/Buy";
// import Sell from "./Deals/Sell";
// import Return from "./Deals/Return";

class Header extends Component {
  constructor(props) {
    super(props);

    this.languages = [
      { name: "Azərbaycanca", code: "az" },
      { name: "Türkçe", code: "tr" },
      { name: "English", code: "en" }
    ];

    this.pageTabs = [
      //path, icon, pageName
      ["/deals/buy", "sign-in-alt", "Alış"],
      ["/deals/sell", "sign-out-alt", "Satış"],
      ["/deals/return", "level-up-alt", "İade"]
    ];
  }

  componentDidMount() {
    var pages = document.querySelectorAll(".sidenav");
    M.Sidenav.init(pages, {});

    var languages = document.querySelectorAll(".languages-dropdown-trigger");
    M.Dropdown.init(languages, { container: true });
  }

  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false || undefined:
        return (
          <li>
            <a href="#!" className="link">
              Giriş Yap
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout" className="link">
              Çıkış
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <div style={{ height: "0" }}>
        <div className="navbar-fixed">
          <nav className="nav">
            <div className="nav-wrapper">
              {/* LOGO */}
              <div>
                <Link to={"/"} className="brand-logo logo">
                  <FontAwesomeIcon icon="chart-line" />
                </Link>
                <a
                  href="#!"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">
                    <FontAwesomeIcon className="fa" icon="bars" />
                  </i>
                </a>
              </div>
              {/* PAGE-TABS */}
              <ul
                id="nav-mobile"
                className="hide-on-med-and-down"
                style={{
                  marginLeft: "70px",
                  display: this.props.location.pathname.startsWith("/deals")
                    ? ""
                    : "none"
                }}
              >
                {this.pageTabs.map(tab => {
                  return (
                    <li key={tab[0]} style={{ width: "80px" }}>
                      <NavLink
                        className="waves-effect icon page-tab-icon center-align"
                        activeClassName="activeTab"
                        to={tab[0]}
                      >
                        <FontAwesomeIcon
                          className="fa"
                          icon={tab[1]}
                          size="3x"
                        />
                        <div style={{ paddingLeft: "5px" }}>{tab[2]}</div>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              {/* RIGHT-END */}
              <ul className="right link">
                {this.renderLogin()}

                {/* <li className="hide-on-med-and-down">
                  <a
                    className="languages-dropdown-trigger link"
                    href="#!"
                    data-target="languages-dropdown"
                  >
                    {this.props.lang.toUpperCase()}
                  </a>

                  <ul id="languages-dropdown" className="dropdown-content">
                    {this.languages.map(lang => (
                      <li key={lang.code}>
                        <a
                          onClick={() => {
                            this.props.setActiveLanguage(lang.code);
                          }}
                        >
                          {lang.code.toUpperCase()}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps)(Header));
