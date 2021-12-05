import React from "react";
import { useTranslation } from "react-i18next";

import image from "../../images/img102.png";
import image2 from "../../images/img104.png";

export default function SeverContent() {
  const { t } = useTranslation();

  return (
    <>
      <main id="main">
        <section className="abt-sec" id="about">
          <div className="row">
            <div className="col-sm-12">
              <div className="header text-center">
                <h2 className="heading2">
                  <span className="title text-uppercase"> </span>
                  {t("about")}
                </h2>
                <div className="about-container">
                  <p>{t("about_text")}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 text-center">
              <div className="img-holder">
                <img src={image} className="img-responsive" />
              </div>
            </div>
          </div>
        </section>
        <section className="service-sec" id="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="header text-center">
                  <h2 className="heading2">
                    <span className="title text-uppercase">
                      {t("services")}{" "}
                    </span>
                    {t("weoffer")}
                  </h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv1">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service1")}</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv2">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service2")}</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv3">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service3")}</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="header text-center"></div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv4">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service4")}</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv5">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service5")}</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv6">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service6")}</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="header text-center"></div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv7">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service7")}</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv8">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service8")}</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-col serv serv9">
                  <div className="glass"></div>
                  <h2 className="heading1 serv-text">{t("service9")}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="choose-sec">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="img-col">
                  <img
                    src={image2}
                    alt="construction-img"
                    className="img-responsive logo2"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="header">
                  <h2 className="heading2">
                    <span className="title text-uppercase">{t("choose")}</span>
                  </h2>
                </div>
                <ul className="list-unstyled choose-list">
                  <li>
                    <span className="icon ti-medall"></span>
                    <div className="txt-holder">
                      <h3 className="heading1">{t("choose1")}</h3>
                    </div>
                  </li>
                  <li>
                    <span className="icon ti-user"></span>
                    <div className="txt-holder">
                      <h3 className="heading1">{t("choose2")}</h3>
                    </div>
                  </li>
                  <li>
                    <span className="icon ti-ruler-alt-2"></span>
                    <div className="txt-holder">
                      <h3 className="heading1">{t("choose3")}</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="choose-sec location">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="advs-box advs-box-top-icon boxed-inverse text-left"
                  id="contact"
                >
                  <h3>{t("visit")}</h3>
                  <p>{t("address_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="advs-box advs-box-top-icon boxed-inverse text-left">
                  <i className="im-support icon circle"></i>
                  <h3>{t("call")}</h3>
                  <p>{t("call_text")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="
                                advs-box advs-box-top-icon
                                boxed-inverse
                                text-left
                            "
                >
                  <i className="im-envelope icon circle"></i>
                  <h3>{t("write")}</h3>
                  <p>{t("write_text")}</p>
                  <p>info@severstroy.am</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="map">
                  <div style={{ width: "100%" }}>
                    <iframe
                      width="100%"
                      height="400"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2154.8524265774677!2d44.500372788686!3d40.19968543724617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd3fc5e18bf9%3A0x5ab87012ac001f4d!2s12%20Vagharsh%20Vagharshyan%20St%2C%20Yerevan%200012%2C%20Armenia!5e0!3m2!1sen!2s!4v1606921604979!5m2!1sen!2s"
                    ></iframe>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
