import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

var bnr1 = require("./../../images/background/cont.jpg");

export default function Callus() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center"
        style={{ backgroundImage: "url(" + bnr1.default + ")" }}
      >
        <div className="overlay-main bg-primary opacity-07 bg-white" />
        <div className="container">
          <div className="section-content">
            <div className="call-us-section text-center">
              <h4 className="m-b15">{t("work_together")}</h4>
              <h2 className="call-us-number m-b15 m-b0">{t("phone_text")}</h2>
              <h4 className="call-us-address m-t0 m-b20">
                {t("address_text")}
              </h4>
              <NavLink
                to="/contactus"
                className="site-button-secondry btn-effect bg-dark"
              >
                {t("contact")}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
