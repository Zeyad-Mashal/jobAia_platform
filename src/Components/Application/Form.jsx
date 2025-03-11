import React, { useState } from "react";
import "./Form.css"; // استيراد ملف الـ CSS
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
const Form = () => {
  // هنا بنحفظ البيانات اللي المستخدم بيكتبها في الفورم
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    alternatePhone: "",
    otherJob: "",
    position: "",
    WorkingPeriod: "",
    workedUsWhen_month: "",
    workedUsWhen_day: "",
    workedUsWhen_year: "",
    cv: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
  };
  return (
    <div className="app">
      <div className="App_container">
        <h2>Job Seekers App</h2>
        {/* ////////////////////////////////////////////////////// */}
        {/* لو الفورم اتبعت، نظهر رسالة نجاح */}
        {isSubmitted ? (
          <div className="success-message">
            <MdDone />
            <h2>Form submitted successfully!</h2>
            <button>
              <Link to={"/feedback"}>Go To FeedBack</Link>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* حقل الاسم */}
            <label>
              Name<span className="required">*</span>
            </label>
            <div id="className" className="form-group">
              <input
                className="Names"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="Names"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* حقل العنوان */}
            <div className="form-group">
              <label>
                Address<span className="required">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <div className="row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State / Province"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="zipCode"
                className="zipCode"
                placeholder="ZipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
            {/*Phone Number*/}
            <div className="form-group">
              <label>
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="(111) 111-1111"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            {/*Phone Number(2)*/}
            <div className="form-group">
              <label>Alternate Number</label>
              <input
                type="text"
                name="alternatePhone"
                placeholder="(111) 111-1111"
                value={formData.alternatePhone}
                onChange={handleChange}
              />
            </div>

            {/* الوظيفة المتقدم لها */}
            <div className="form-group">
              <label>
                Position for which you are applying?{" "}
                <span className="required">*</span>
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select a position1</option>
                <option value="Sales Associate">Select a position2</option>
                <option value="Manager">Select a position3</option>
                <option value="Developer">Select a position4</option>
                <option value="Developer">Select a position5</option>
              </select>
            </div>

            <div className="form-group">
              <label>If other , kindly specify</label>
              <input
                type="text"
                name="otherJob"
                placeholder="Front End"
                value={formData.otherJob}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Preferred Working mode <span className="required">*</span>
              </label>
              <select
                name="WorkingPeriod"
                value={formData.WorkingPeriod}
                onChange={handleChange}
                required
              >
                <option value="Manager">Full-Time</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Have you previously worked us?{" "}
                <span className="required">*</span>
              </label>
              <select
                name="workedUs"
                value={formData.workedUs}
                onChange={handleChange}
                required
              >
                <option value="Manager">yes</option>
              </select>
            </div>
            <label>
              If so , When? <span className="required">*</span>
            </label>
            <div className="Date">
              <select
                name="workedUsWhen_month"
                value={formData.workedUsWhen_month}
                onChange={handleChange}
                required
              >
                <option value="Manager">January</option>
              </select>
              <select
                name="workedUsWhen_year"
                value={formData.workedUsWhen_year}
                onChange={handleChange}
                required
              >
                <option value="Manager">2025</option>
              </select>
              <select
                name="workedUsWhen_day"
                value={formData.workedUsWhen_day}
                onChange={handleChange}
                required
              >
                <option value="Manager">1</option>
              </select>
            </div>

            {/* /////////////////////////////////////////////////// */}
            {/* رفع الـ CV */}
            <div className="form-group">
              <label>
                Upload Your CV <span className="required">*</span>
              </label>
              <div className="file-upload">
                <input
                  type="file"
                  id="cvUpload"
                  onChange={handleFileChange}
                  required
                />
                <label htmlFor="cvUpload">
                  <i className="upload-icon">📂</i>
                  <p>Drag and drop files here</p>
                </label>
              </div>
            </div>
            {/* زر الإرسال */}
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
