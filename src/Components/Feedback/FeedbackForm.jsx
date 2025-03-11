import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./FeedbackForm.css";
const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    feedback: false,
    rating: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: firstName.trim() === "",
      lastName: lastName.trim() === "",
      email: email.trim() === "",
      feedback: feedback.trim() === "",
      rating: rating === 0,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setShowPopup(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setFeedback("");
    setRating(0);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      {/* Full-screen Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <IoCheckmarkCircleOutline className="text-green-500 text-6xl mb-2" />
            <p className="text-gray-800 text-lg font-semibold">
              Your feedback has been sent successfully!
            </p>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl min-h-[80vh] p-6 sm:p-12 bg-white shadow-xl rounded-2xl feedBackForm">
        <form onSubmit={handleSubmit}>
          {/* Feedback Textarea */}
          <label className="block text-gray-700 font-semibold text-lg sm:text-xl mb-2 sm:mb-4">
            Describe Your Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`w-full p-3 sm:p-4 border ${
              errors.feedback ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base sm:text-lg`}
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>

          {/* Name Inputs */}
          <div className="mt-4 sm:mt-6">
            <label className="block text-gray-700 font-semibold text-lg sm:text-xl mb-2 sm:mb-4">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className={`flex-1 p-3 sm:p-4 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base sm:text-lg`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={`flex-1 p-3 sm:p-4 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base sm:text-lg`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mt-4 sm:mt-6">
            <label className="block text-gray-700 font-semibold text-lg sm:text-xl mb-2 sm:mb-4">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="ex: myname@example.com"
              className={`w-full p-3 sm:p-4 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-base sm:text-lg`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Star Rating */}
          <div className="mt-6 text-center">
            <p className="text-gray-700 font-semibold text-lg sm:text-xl mb-3">
              Rate Us
            </p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={32}
                  className={`cursor-pointer ${
                    star <= (hover || rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
            {errors.rating && (
              <p className="text-red-500 text-sm mt-2">
                Please select a rating
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 sm:mt-8 bg-green-600 text-white py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
