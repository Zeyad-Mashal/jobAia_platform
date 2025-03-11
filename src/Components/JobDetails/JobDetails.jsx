import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "./JobDetails.css";
import { Link } from "react-router-dom";
const JobDetails = () => {
  const jobData = {
    title: "Call Center Agent - English Account - Part Time",
    company: { name: "Alshaya", logo: "sdlkcdkcd" },
    location: "Cairo, Egypt",
    postedDate: "Posted 9 days ago",
    employmentType: ["Part Time", "Remote"],
    experience: "0 To 3 Years",
    careerLevel: "Entry Level (Junior Level / Fresh Grad)",
    educationLevel: "Not Specified",
    salary: "6000 To 8000 EGP Per Month",
    categories: ["Customer Service/Support"],
    skills: [
      { name: "Call Center", icon: <FaExclamationCircle /> },
      { name: "Customer Service", icon: <FaCheckCircle /> },
      { name: "Customer Support", icon: <FaExclamationCircle /> },
      { name: "English", icon: <FaExclamationCircle /> },
      { name: "Internet", icon: <FaExclamationCircle /> },
      { name: "MS", icon: <FaCheckCircle /> },
      { name: "Service", icon: <FaCheckCircle /> },
    ],
    description: [
      "Record and maintain financial transactions in accounting software.",
      "Prepare financial statements, reports, and balance sheets.",
      "Assist in budgeting and forecasting activities.",
      "Process invoices, payments, and bank reconciliations.",
    ],
    requirements: [
      "Bachelor's degree in Accounting, Finance, or a related field.",
      "1-2 years of accounting experience in a similar role.",
      "Proficiency in accounting software (e.g., QuickBooks, SAP, or similar).",
      "Strong knowledge of financial regulations and tax laws.",
    ],
  };

  const featuredJobs = [
    {
      title: "Senior Accountant",
      company: "Metco",
      location: "Zamalek, Cairo",
      timeAgo: "4 hours ago",
      logo: null,
    },
    {
      title: "Cost Accountant",
      company: "Farouk Systems Egypt",
      location: "6th of October, Giza",
      timeAgo: "29 days ago",
      logo: null,
    },
    {
      title: "Cost Accountant",
      company: "Farouk Systems Egypt",
      location: "6th of October, Giza",
      timeAgo: "29 days ago",
      logo: null,
    },
    {
      title: "Cost Accountant",
      company: "Farouk Systems Egypt",
      location: "6th of October, Giza",
      timeAgo: "29 days ago",
      logo: null,
    },
    {
      title: "Cost Accountant",
      company: "Farouk Systems Egypt",
      location: "6th of October, Giza",
      timeAgo: "29 days ago",
      logo: null,
    },
    {
      title: "Cost Accountant",
      company: "Farouk Systems Egypt",
      location: "6th of October, Giza",
      timeAgo: "29 days ago",
      logo: null,
    },
    {
      title: "Cost Accountant",
      company: "Farouk Systems Egypt",
      location: "6th of October, Giza",
      timeAgo: "29 days ago",
      logo: null,
    },
    {
      title: "Cost Accountant",
      company: "Farouk Systems Egypt",
      location: "6th of October, Giza",
      timeAgo: "29 days ago",
      logo: null,
    },
  ];

  const defaultLogo = "https://cdn-icons-png.flaticon.com/512/4091/4091450.png";

  return (
    <div className="job-page-container">
      <div className="job-header-box">
        <div className="job-header">
          <h1 className="job-title">{jobData.title}</h1>
          <div className="employment-tags">
            {jobData.employmentType.map((type, index) => (
              <span key={index} className="tag">
                {type}
              </span>
            ))}
          </div>
          <p className="company-location">
            <strong>{jobData.company.name}</strong> - {jobData.location}
          </p>
          <p className="posted-date">{jobData.postedDate}</p>
          <button className="apply-button">
            <Link to={"/jobApp"}>Apply Now</Link>
          </button>
        </div>

        <div className="company-logo">
          <img
            src={jobData.company.logo ? jobData.company.logo : defaultLogo}
            alt="Company Logo"
          />
        </div>
      </div>

      {/* Job Details Section */}
      <div className="job-details-container">
        <h2>Job Details</h2>
        <p>
          <FaCheckCircle className="icon success" />{" "}
          <strong>Experience Needed:</strong> {jobData.experience}
        </p>
        <p>
          <FaExclamationCircle className="icon warning" />{" "}
          <strong>Career Level:</strong> {jobData.careerLevel}
        </p>
        <p>
          <FaCheckCircle className="icon success" />{" "}
          <strong>Education Level:</strong> {jobData.educationLevel}
        </p>
        <p>
          <FaExclamationCircle className="icon warning" />{" "}
          <strong>Salary:</strong> {jobData.salary}
        </p>

        <div className="skills-section">
          <h2>Skills And Tools</h2>
          <div className="skills-container">
            {jobData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="job-section">
        <h2>Job Description</h2>
        <ul>
          {jobData.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>

      {/* Job Requirements */}
      <div className="job-section">
        <h2>Job Requirements</h2>
        <ul>
          {jobData.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Featured Jobs */}
      <div className="featured-jobs-box">
        <h2>Featured Jobs</h2>
        <div className="featured-jobs-container">
          {featuredJobs.map((job, index) => (
            <div key={index} className="featured-job-card">
              <div className="job-logo">
                <img
                  src={job.logo ? job.logo : defaultLogo}
                  alt="Company Logo"
                />
              </div>
              <div className="job-info">
                <h3 className="job-title">{job.title}</h3>
                <p>
                  {job.company} - {job.location}
                </p>
                <span className="time-ago">{job.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
