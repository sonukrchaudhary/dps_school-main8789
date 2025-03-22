import { useState } from "react";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  // State for toggling "Read More" content
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreMessage, setShowMoreMessage] = useState(false);

  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-8">
      {/* About Our School */}
      <div className="flex flex-wrap justify-center gap-6 px-6 py-8">
      {/* About Our School */}
      <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300">
        <h2 className="text-xl font-bold text-teal-600 px-6 py-4">
          ABOUT OUR SCHOOL
        </h2>
        <img
          src="/images/school.jpg" // Change to actual image path
          alt="School Building"
          className="w-full h-80 object-cover"
        />
        <p className="text-gray-700 px-6 py-4">
          Delhi Public School, located in the premises of the Narhan Estate started in 2016 with 150 students...
        </p>
        <div className="px-6 pb-4">
          <NavLink
            to="/about"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            READ MORE
          </NavLink>
        </div>
      </div>
    </div>

      {/* Principal's Message */}
      <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300">
        <h2 className="text-xl font-bold text-teal-600 px-6 py-4">
          PRINCIPAL'S MESSAGE
        </h2>
        <img
          src="/images/principal.jpg" // Change to your actual image path
          alt="Principal"
          className="w-full h-80 object-cover"
        />
        <p className="text-gray-700 px-6 py-4">
          At DPS Narhan, we believe that education is not just about acquiring knowledge but also about developing a strong character, fostering creativity, and instilling values that shape responsible and compassionate individuals.
          {showMoreMessage && (
            <>
             I want to express my sincere gratitude for the dedication and hard work of our students, 
             staff, and families  </>
          )}
        </p>
        <div className="px-6 pb-4">
          <NavLink to = "/principal"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
