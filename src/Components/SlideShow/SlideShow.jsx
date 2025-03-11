import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.css";
import image1 from "../../assets/images/Huawei.jpg";
import image2 from "../../assets/images/iphone.jpg";
import image3 from "../../assets/images/oppo.png";

const SlideShow = () => {
  const slideImages = [
    {
       url: image1,
    }, 
    { 
        url: image2,

    },
    { 
      url: image3 ,
    }
 ];

  return (
    <section className="py-10 flex items-center justify-center w-full">
      <div className="bg-gray-200 sm:px-8 md:px-16 mx-auto w-full">
        <Fade
          duration={3000}
          transitionDuration={1500}
          autoplay={true}
          infinite={true}
          indicators={true}
          arrows={false}
        >
          {slideImages.map((slideImage, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-20 justify-center p-6 md:p-10 w-full"
            >
              <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-thin">
                  Explore the right jobs
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem praesentium dolore nobis? Repudiandae, placeat
                  magnam. Quasi nobis accusamus debitis impedit et quo
                  laboriosam eaque veniam.
                </p>
                <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 hover:bg-blue-700">
                  Get Started Now
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src={slideImage.url}
                  alt="slide"
                  className="h-60 sm:h-80 md:h-96 w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default SlideShow;
