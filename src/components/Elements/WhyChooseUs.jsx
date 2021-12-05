import { useTranslation } from "react-i18next";

var bnr1 = require("./../../images/background/bg-4.png");

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="section-full text-center bg-gray bg-no-repeat p-t80 p-b50 bg-top-right mobile-page-padding"
        style={{ backgroundImage: "url(" + bnr1.default + ")" }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">
                    {t("why")}{" "}
                  </span>
                  {t("choose")}
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="pricingtable-row">
              <div className="row">
                <div className="col-lg-4  col-md-4 col-sm-4  col-xs-6 col-xs-100pc  m-b30">
                  <div className="pricingtable-wrapper pricing-table-style-5 bg-white overflow-hide hover-shadow bdr-t-4 bdr-solid bdr-primary">
                    <div className="pricingtable-inner">
                      <div className="pricingtable-title">
                        <h4>{t("why1_title")}</h4>
                      </div>
                      <ul className="pricingtable-features text-black">
                        <p>{t("why1_text")}</p>
                      </ul>
                      <div className="overlay-main bg-white opacity-07" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4  col-sm-4  col-xs-6 col-xs-100pc m-b30">
                  <div className="pricingtable-wrapper  pricing-table-style-5 overflow-hide hover-shadow bdr-t-4 bdr-solid bdr-primary">
                    <div className="pricingtable-inner">
                      <div className="pricingtable-title">
                        <h4>{t("why2_title")}</h4>
                      </div>

                      <ul className="pricingtable-features text-black">
                        <p>{t("why2_text")}</p>
                      </ul>
                      <div className="overlay-main bg-white opacity-07" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4  col-sm-4  col-xs-12 m-b30">
                  <div className="pricingtable-wrapper  pricing-table-style-5 overflow-hide hover-shadow bdr-t-4 bdr-solid bdr-primary bg-gray">
                    <div className="pricingtable-inner">
                      <div className="pricingtable-title">
                        <h4>{t("why3_title")}</h4>
                      </div>
                      <ul className="pricingtable-features text-black">
                        <p>{t("why3_text")}</p>
                      </ul>
                      <div className="overlay-main bg-white opacity-07" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
