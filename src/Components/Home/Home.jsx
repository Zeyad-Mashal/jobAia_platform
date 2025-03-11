import React from "react";
import "./Home.css";
import MainSection from "../MainSection/MainSection";
import Companies from "../Companies/Companies";
import Career from "../Career/Career";
import SlideShow from "../SlideShow/SlideShow";
import LatestJobs from "../LatestJobs/LatestJobs";
import Join from "../Join/Join";
const Home = () => {
  return (
    <>
      <MainSection />
      <Companies />
      <SlideShow />
      <LatestJobs />
      <Join />
      <Career />
    </>
  );
};

export default Home;
