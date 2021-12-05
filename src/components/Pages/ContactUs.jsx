import React from "react";
import GoogleMaps from "simple-react-google-maps";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import { useTranslation } from "react-i18next";

var bnrimg = require("./../../images/banner/4.jpg");

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title={t("contact_text")}
          pagename={t("contact")}
          bgimage={bnrimg.default}
        />

        {/* SECTION CONTENTG START */}
        <div className="section-full p-tb80 inner-page-padding">
          {/* LOCATION BLOCK*/}
          <div className="container">
            {/* GOOGLE MAP & CONTACT FORM */}
            <div className="section-content">
              {/* CONTACT FORM*/}
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <form
                    className="contact-form cons-contact-form"
                    method="post"
                    action=""
                  >
                    <div className="contact-one m-b30">
                      {/* TITLE START */}
                      <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                          <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one ">
                              <span className="font-weight-300 text-primary">
                                {t("formTitle1")}
                              </span>{" "}
                              {t("formTitle2")}
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* TITLE END */}
                      <div className="form-group">
                        <input
                          name="username"
                          type="text"
                          required
                          className="form-control"
                          placeholder={t("name")}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          required
                          placeholder={t("email")}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows={4}
                          className="form-control "
                          required
                          placeholder={t("message")}
                          defaultValue={""}
                        />
                      </div>
                      <div className="text-right">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button btn-effect"
                        >
                          {t("send")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="contact-info m-b30">
                    {/* TITLE START */}
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-uppercase sep-line-one ">
                            <span className="font-weight-300 text-primary">
                              {t("cont")}
                            </span>{" "}
                            {t("info")}
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* TITLE END */}
                    <div className="bg-dark p-a20 text-white">
                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">{t("phone")}</h5>
                          <p>+374-41-786-001</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">{t("email")}</h5>
                          <p>info@severstroy.am</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper left">
                        <div className="icon-xs">
                          <i className="fa fa-map-marker" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">
                            {t("address")}
                          </h5>
                          <p>{t("address_text")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gmap-outline">
              <GoogleMaps
                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                style={{ height: "400px", width: "100%" }}
                zoom={17}
                center={{ lat: 40.1863498, lng: 44.5184405 }}
                markers={{ lat: 40.1863498, lng: 44.5184405 }} //optional
              />
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>

      <Footer />
    </>
  );
}
