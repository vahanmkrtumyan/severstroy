import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
  require("./../../images/gallery/portrait/pic1.jpg"),
  require("./../../images/gallery/portrait/pic2.jpg"),
  require("./../../images/gallery/portrait/pic3.jpg"),
  require("./../../images/gallery/portrait/pic4.jpg"),
];

const options = {
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 30,
  nav: false,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  items: 1,
  dots: true,
};

export default function About3() {
  const { t } = useTranslation();

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

  return (
    <>
      <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
        <div className="container">
          <div className="section-content ">
            <div className="row">
              <div className="col-md-5 col-sm-6">
                <div className="m-about ">
                  <OwlCarousel
                    className="owl-carousel about-us-carousel"
                    {...options}
                  >
                    {images.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="ow-img">
                          <NavLink to="/">
                            <img src={item.default} alt="" />
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-md-7 col-sm-6">
                <div className="m-about-containt text-black p-t80">
                  <h3 className="font-weight-600">{t("about")}</h3>
                  <p>{t("about_text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
