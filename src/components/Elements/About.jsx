import React from "react";
import OwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
  require("./../../images/gallery/pic1.jpg"),
  require("./../../images/gallery/pic8.jpg"),
  require("./../../images/gallery/pic9.jpg"),
  require("./../../images/gallery/pic6.jpg"),
  require("./../../images/gallery/pic2.jpg"),
];

var bnr1 = require("./../../images/background/bg-6.png");

const options = {
  loop: true,
  autoplay: true,
  margin: 30,
  nav: false,
  dots: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    991: {
      items: 1,
    },
  },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving"
        style={{ backgroundImage: "url(" + bnr1.default + ")" }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">
                    {t("about_first")}
                  </span>{" "}
                  {t("about_second")}
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="row">
              <div className="col-md-9 col-sm-12">
                <OwlCarousel
                  className="owl-carousel about-home owl-btn-vertical-center"
                  {...options}
                >
                  {images.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="mt-img-effect zoom-slow">
                        <img src={item.default} alt="" />
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="about-home-right bg-white p-a30">
                  <h3 className="m-t0">
                    <p>{t("about_header")}</p>
                  </h3>
                  <p>
                    <p>{t("about_text")}</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>{t("about")}</strong>
        </div>
      </div>
    </>
  );
}
