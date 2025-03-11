import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../assets/images/header.jpeg";
import image2 from "../../assets/images/counters-bg.jpg";
import image3 from "../../assets/images/work-3.jpg";
import "./MainSection.css";
import { Link } from "react-router-dom";

const MainSection = () => {
  const slideImages = [
    { url: image1, caption: "Caption 1" },
    { url: image2 },
    { url: image3 },
  ];

  return (
    <div className="slide-container">
      <Fade arrows={false} duration={5000}>
        {slideImages.map((fadeImage, index) => (
          <div key={index} className="relative w-full h-screen">
            <img
              style={{ width: "100%", height: "100%" }}
              src={fadeImage.url}
              className="object-cover brightness-75"
            />

            <div className="text-white space-y-4 absolute inset-0 flex flex-col items-center justify-center p-4">
              <h1 className="text-3xl md:text-5xl font-bold text-center">
                Find the Best Jobs in Egypt
              </h1>
              <p className="text-sm md:text-lg text-center">
                Searching for vacancies & career opportunities? WUZZUF helps you
                in your job search in Egypt
              </p>

              <div className="flex flex-row items-center bg-white rounded-lg p-3 w-full md:w-1/2">
                <i className="text-blue-700 fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search Jobs (e.g. Senior PHP developer)"
                  className="flex-grow px-4 py-2 border-none text-gray-700 focus:ring-0 w-full md:w-auto"
                />
                <Link to={"/jobs"}>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full md:w-auto">
                    Search
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default MainSection;
