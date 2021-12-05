import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

export default function Navigation(props) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div
        className={
          props.bgcolor !== ""
            ? `header-nav navbar-collapse collapse ${props.bgcolor}`
            : "header-nav navbar-collapse collapse"
        }
      >
        <ul className="nav navbar-nav">
          <li>
            <Link to={"./"} onClick={() => window.scrollTo(0, 0)}>
              {t("home")}
            </Link>
          </li>
          {/* <li>
            <NavLink to={"/services"}>{t("services")}</NavLink>
          </li> */}

          <li>
            <NavHashLink to={"/#services"}>{t("services")}</NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#contact">{t("contact")}</NavHashLink>
          </li>
          <li>
            <NavLink to={""}>
              {i18n?.language === "am" ? "Լեզու" : "Язык"}
            </NavLink>
            <ul className="sub-menu">
              <li onClick={() => i18n.changeLanguage("am")}>
                <p to={""}>Հայերեն</p>
              </li>
              <li onClick={() => i18n.changeLanguage("ru")}>
                <p to={""}>Русский</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
