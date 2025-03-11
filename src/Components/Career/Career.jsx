import React from "react";
import image1 from "../../assets/images/person.jpg";
import image2 from "../../assets/images/person22.jpg";

const Career = () => {
  return (
    <section className="py-1">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-semibold mb-10 text-gray-900">
          Browse Jobs by Career Level
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative w-56 group">
            <img
              className="brightness-75 w-full  h-72 object-cover rounded-md  transition-all group-hover:shadow-2xl"
              src={image1}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Senior Management Jobs
            </div>
          </div>

          <div className="relative w-56 group">
            <img
              className="brightness-75 w-full h-72 object-cover rounded-md  transition-all  group-hover:shadow-2xl"
              src={image2}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Management Jobs
            </div>
          </div>

          <div className="relative w-56 group">
            <img
              className="brightness-75 w-full h-72 object-cover rounded-md  transition-all group-hover:shadow-2xl "
              src={image1}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Experienced Jobs
            </div>
          </div>

          <div className="relative w-56 group">
            <img
              className="brightness-75 w-full h-72 object-cover rounded-md  transition-all  group-hover:shadow-2xl "
              src={image2}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Entry Level Jobs
            </div>
          </div>

          <div className="relative w-56 group">
            <img
              className="brightness-75 w-full h-72 object-cover rounded-md  transition-all group-hover:shadow-2xl "
              src={image1}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0  text-white text-center py-2">
              Internships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
