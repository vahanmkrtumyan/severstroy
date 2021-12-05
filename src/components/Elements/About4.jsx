import OwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var bnr1 = require("./../../images/background/line.png");

const options = {
  loop: true,
  autoplay: true,
  autoplayTimeout: 300000000000,
  margin: 30,
  nav: false,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  items: 1,
  dots: true,
};

export default function About4({ data }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        id="about"
        className="section-full p-t30 p-b80 bg-white inner-page-padding"
      >
        <div className="container">
          <div className="section-content ">
            <div className="row">
              <div className="col-md-5 col-sm-6">
                <div className="m-about ">
                  <OwlCarousel
                    className="owl-carousel about-us-carousel"
                    {...options}
                  >
                    <img src={data?.about_image?.url} alt="" />
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-md-7 col-sm-6">
                <div className="m-about-containt text-black p-t80">
                  <div
                    className="m-about-years bg-moving"
                    style={{ backgroundImage: "url(" + bnr1.default + ")" }}
                  >
                    <span className="text-primary large-title">
                      {t("about_title")}
                    </span>
                    <span className="large-title-info">
                      {t("about_subtitle")}
                    </span>
                  </div>
                  <h3 className="font-weight-600">{t("about_header")}</h3>
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
