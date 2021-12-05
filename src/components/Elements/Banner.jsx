import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Banner(props) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(" + props.bgimage + ")" }}
      >
        <div className="overlay-main bg-black opacity-07" />
        <div className="container">
          <div className="mt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="m-b0">{props.title}</h2>
              </div>
            </div>
            {/* BREADCRUMB ROW */}
            <div>
              <ul className="mt-breadcrumb breadcrumb-style-2">
                <li>
                  <NavLink to={"./"}>{t("home")}</NavLink>
                </li>
                <li>{props.pagename}</li>
              </ul>
            </div>
            {/* BREADCRUMB ROW END */}
          </div>
        </div>
      </div>
    </>
  );
}
