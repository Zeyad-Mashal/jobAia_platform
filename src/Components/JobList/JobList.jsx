import React, { useState } from "react";
import "./JobList.css";
import { Link } from "react-router-dom";
const JobList = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Cairo, Egypt",
      type: "Full-Time",
      experience: "2-4 years",
      description:
        "Develop user-friendly web interfaces using React and modern frontend technologies.",
    },
    {
      title: "Backend Developer",
      company: "Code Masters",
      location: "Riyadh, Saudi Arabia",
      type: "Part-Time",
      experience: "3-5 years",
      description:
        "Design and implement server-side logic and APIs using Node.js and Express.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Hub",
      location: "Dubai, UAE",
      type: "Freelance",
      experience: "1-3 years",
      description:
        "Create intuitive designs and prototypes for web and mobile applications.",
    },
    {
      title: "Data Analyst",
      company: "Data Insights",
      location: "Alexandria, Egypt",
      type: "Full-Time",
      experience: "2-5 years",
      description:
        "Analyze data sets to provide actionable insights for business decisions.",
    },
    {
      title: "Digital Marketing Specialist",
      company: "Brand Boosters",
      location: "New Cairo, Egypt",
      type: "Full-Time",
      experience: "2-4 years",
      description:
        "Plan and execute digital marketing campaigns across multiple platforms.",
    },
    {
      title: "Product Manager",
      company: "Innovate Tech",
      location: "Dubai, UAE",
      type: "Full-Time",
      experience: "5+ years",
      description:
        "Lead cross-functional teams to deliver innovative products on time.",
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Experts",
      location: "Riyadh, Saudi Arabia",
      type: "Full-Time",
      experience: "3-6 years",
      description:
        "Automate and optimize deployment pipelines using CI/CD tools.",
    },
    {
      title: "Mobile App Developer",
      company: "App Innovators",
      location: "Amman, Jordan",
      type: "Contract",
      experience: "2-4 years",
      description:
        "Build high-performance mobile apps using Flutter or React Native.",
    },
    {
      title: "Sales Executive",
      company: "Global Sales",
      location: "Casablanca, Morocco",
      type: "Full-Time",
      experience: "1-3 years",
      description: "Generate leads and close deals for software solutions.",
    },
    {
      title: "Customer Support Representative",
      company: "Support Pro",
      location: "Beirut, Lebanon",
      type: "Full-Time",
      experience: "1-2 years",
      description:
        "Provide exceptional customer service via phone, email, and chat.",
    },
    {
      title: "Financial Analyst",
      company: "Finance Wizards",
      location: "Kuwait City, Kuwait",
      type: "Full-Time",
      experience: "3-5 years",
      description:
        "Analyze financial data to support strategic decision-making.",
    },
    {
      title: "Content Writer",
      company: "WordSmiths",
      location: "Remote",
      type: "Freelance",
      experience: "1-2 years",
      description:
        "Write engaging blog posts, articles, and social media content.",
    },
    {
      title: "HR Specialist",
      company: "Talent Hub",
      location: "Jeddah, Saudi Arabia",
      type: "Full-Time",
      experience: "2-4 years",
      description: "Recruit and onboard top talent for various departments.",
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet",
      location: "Doha, Qatar",
      type: "Full-Time",
      experience: "4-6 years",
      description:
        "Monitor and protect systems from cyber threats and vulnerabilities.",
    },
    {
      title: "Project Manager",
      company: "Task Masters",
      location: "Sharjah, UAE",
      type: "Full-Time",
      experience: "5+ years",
      description:
        "Manage end-to-end project execution and ensure timely delivery.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const currentJobs = currentPage === 1 ? jobs : [];

  return (
    <section className="job_list">
      <h1>Available Jobs</h1>
      <div className="job_list_container">
        {currentJobs.length > 0 ? (
          currentJobs.map((job, index) => (
            <div key={index} className="job_card">
              <div className="job_header">
                <h2>{job.title}</h2>
                <p className="company">{job.company}</p>
              </div>
              <div className="job_details">
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Type:</strong> {job.type}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience}
                </p>
              </div>
              <p className="description">{job.description}</p>
              <button className="apply_button">
                <Link to="/jobsDetails">Apply Now</Link>
              </button>
            </div>
          ))
        ) : (
          <p>No jobs available on this page.</p>
        )}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`pagination-button ${
              currentPage === page ? "active" : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default JobList;
