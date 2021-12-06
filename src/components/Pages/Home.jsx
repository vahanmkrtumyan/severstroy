import React from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Slider from "./../Elements/Slider";
// import Specialization from "./../Elements/Specialization";
import About from "./../Elements/About3";
// import OurValue from "./../Elements/OurValue";
// import OurMission from "./../Elements/OurMission";
// import OurServices from "./../Elements/OurServices";
import Callus from "./../Elements/Callus";
import WhyChooseUs from "./../Elements/WhyChooseUs";
// import OurProject from "./../Elements/OurProject";
// import Blogs from "./../Elements/Blogs2";
// import Testimonials from "./../Elements/Testimonials";
import SeverContent from "./../Elements/SeverContent";

export default function Home() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Slider />
        <About />
        <SeverContent />
        {/* <Specialization /> */}
        {/* <OurValue />
      <OurMission /> */}
        {/* <Callus /> */}

        {/* <OurServices data={data} /> */}

        {/* <WhyChooseUs /> */}
        {/* <OurProject /> */}
        {/* <Blogs /> */}
        {/* <Testimonials /> */}
      </div>
      <Footer />
    </>
  );
}
