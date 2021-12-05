import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { client } from "../../prismic-configuration";
import Prismic from "prismic-javascript";

var img1 = require("./../../images/background/bg-6.png");

export default function OurServices() {
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState();

  const ending = i18n?.language;

  useEffect(() => {
    (async () => {
      const services = (
        await client.query(Prismic.Predicates.at("document.type", "serv"))
      ).results;
      setServices(services);
    })();
  }, []);

  if (!services) {
    return null;
  }

  return (
    <>
      <div
        id="services"
        className="section-full mobile-page-padding  p-b50  square_shape2"
      >
        <div className="section-content">
          <div
            className="Service-half-top p-t80  bg-dark bg-moving"
            style={{ backgroundImage: "url(" + img1.default + ")" }}
          >
            <div className="container">
              {/* TITLE START */}
              <div className="section-head text-white">
                <div className="mt-separator-outer separator-left">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">
                        {t("our")}
                      </span>{" "}
                      {t("service")}
                    </h2>
                  </div>
                </div>
                <h3>{t("services_subtitle")}</h3>
              </div>
              {/* TITLE END */}
            </div>
          </div>
          <div className="services-half-bottom">
            <div className="container">
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
              >
                {services?.map((item, index) => (
                  <div className="col-md-12 col-sm-12" key={index}>
                    <div className="blog-post blog-grid date-style-2 bg-white shadow">
                      <div
                        className="mt-post-media mt-img-effect zoom-slow"
                        style={{ borderRadius: "16px 16px 0 0" }}
                      >
                        {/* <NavLink to={"/post-image"}> */}
                        <img src={item.data.image.url} alt="" />
                        {/* </NavLink> */}
                      </div>
                      <div className="mt-post-info p-a30">
                        <div className="mt-post-title ">
                          <h4 className="post-title">
                            {/* <NavLink to={"/post-image"}> */}
                            {item.data[`title_${ending}`]}
                            {/* </NavLink> */}
                          </h4>
                        </div>

                        <div className="mt-post-text">
                          <p>{item.data[`subtitle_${ending}`]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>{t("services")}</strong>
        </div>
      </div>
    </>
  );
}
