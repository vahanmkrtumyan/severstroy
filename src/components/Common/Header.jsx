import { useEffect, useState } from "react";
import Navigation from "../Common/Navigation";
import { NavLink } from "react-router-dom";
import logo1 from "./../../images/logo_only.svg";
import { useTranslation } from "react-i18next";

var bnr = require("./../../images/background/bg-5.png");

export default function Header() {
  const [isQuoteActive, setIsQuoteActive] = useState(false);

  const { t } = useTranslation();

  const handleQuoteToggle = () => {
    setIsQuoteActive(!isQuoteActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      const stickyheader = document.querySelector(".sticky-header ");

      if (offset >= 100) {
        stickyheader.classList.add("is-fixed");
        stickyheader.classList.add("color-fill");
      } else {
        stickyheader.classList.remove("is-fixed");
        stickyheader.classList.remove("color-fill");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="site-header header-style-1">
        <div className="sticky-header main-bar-wraper">
          <div className="main-bar bg-white">
            <div className="container">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <NavLink to={"./"}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        onClick={() => window.scrollTo(0, 0)}
                        style={{ height: "50px" }}
                        src={logo1}
                        alt="Severstroy"
                      />
                      <p
                        style={{
                          lineHeight: "22px",
                          margin: "0 0 0 8px",
                          fontSize: "22px",
                          fontWeight: "bold",
                          fontFamily: "Poppins",
                          color: "rgb(15 31 220)",
                        }}
                      >
                        {t("comp")}
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
              {/* NAV Toggle Button */}
              <button
                data-target=".header-nav"
                data-toggle="collapse"
                type="button"
                className="navbar-toggle collapsed"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* ETRA Nav */}
              {/* <div className="extra-nav">
                <div className="extra-cell">
                  <NavLink
                    to={"#"}
                    className="contact-slide-show"
                    onClick={handleQuoteToggle}
                  >
                    <i className="fa fa-angle-left arrow-animation" />
                  </NavLink>
                </div>
              </div> */}
              {/* ETRA Nav */}
              {/* Contact Nav */}
              <div
                className="contact-slide-hide "
                style={{
                  backgroundImage: "url(" + bnr.default + ")",
                  right: isQuoteActive ? "0px" : "-500px",
                }}
              >
                <div className="contact-nav">
                  <NavLink
                    to={"#"}
                    className="contact_close"
                    onClick={handleQuoteToggle}
                  >
                    ×
                  </NavLink>
                </div>
              </div>

              {/* MAIN Vav */}
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
