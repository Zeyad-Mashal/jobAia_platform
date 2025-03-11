import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../assets/images/banner1.avif";
import image2 from "../../assets/images/banner2.jpg";
import image3 from "../../assets/images/banner3.avif";

const Join = () => {
  const fadeImages = [{ url: image1 }, { url: image2 }, { url: image3 }];

  return (
    <section className="py-10 flex items-center justify-center w-full">
      <div className="w-full">
        <Fade arrows={false} duration={3500} transitionDuration={1500} autoplay>
          {fadeImages.map((fadeImage, index) => (
            <div key={index} className="relative">
              <img
                style={{ width: "100%" }}
                src={fadeImage.url}
                className="h-96 object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4 px-4">
                <p className="text-2xl md:text-4xl drop-shadow">
                  Get ready for more opportunities!
                </p>
                <p className="text-lg md:text-xl">
                  You are minutes away from the right job.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default Join;
