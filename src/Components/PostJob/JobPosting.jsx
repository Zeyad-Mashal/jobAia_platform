import React, { useState } from "react";
import "./JobPosting.css";

const JobPostingForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobType, setJobType] = useState([]);
  const [location, setLocation] = useState({ country: "", city: "", area: "" });
  const [skills, setSkills] = useState([]);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [skillInput, setSkillInput] = useState("");

  const jobTypes = [
    "Full Time",
    "Part Time",
    "Freelance / Project",
    "Shift Based",
    "Work From Home",
    "Volunteering",
  ];

  const handleJobTypeClick = (type) => {
    setJobType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() !== "" && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleSkillRemove = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCompanyLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div className="job-form">
      <h2>Job Posting</h2>

      <label>Company Name</label>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Enter company name"
      />

      <label>Job Title</label>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Enter job title"
      />

      <label>Job Type</label>
      <div className="job-type-options">
        {jobTypes.map((type) => (
          <button
            key={type}
            className={jobType.includes(type) ? "selected" : ""}
            onClick={() => handleJobTypeClick(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="location-section">
        <div className="location-group">
          <label>Country</label>
          <select
            value={location.country}
            onChange={(e) =>
              setLocation({ ...location, country: e.target.value })
            }
          >
            <option value="">Select Country</option>
            <option value="Egypt">Egypt</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="location-group">
          <label>City</label>
          <select
            value={location.city}
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
          >
            <option value="">Select City</option>
            <option value="Cairo">Cairo</option>
            <option value="New York">New York</option>
          </select>
        </div>
        <div className="location-group">
          <label>Area</label>
          <select
            value={location.area}
            onChange={(e) => setLocation({ ...location, area: e.target.value })}
          >
            <option value="">Select Area</option>
            <option value="Maadi">Maadi</option>
            <option value="Brooklyn">Brooklyn</option>
          </select>
        </div>
      </div>

      <label>Salary</label>
      <input type="text" name="salary" placeholder="Salary" />

      <label>Job Description</label>
      <textarea name="description" placeholder="Job Description"></textarea>

      <label>Job Requirements</label>
      <textarea name="requirements" placeholder="Job Requirements"></textarea>

      <label>Required Skills</label>
      <div className="skills-input">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Enter skill"
        />
        <button onClick={handleSkillAdd}>Add</button>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill} className="skill-box">
            {skill} <span onClick={() => handleSkillRemove(skill)}>✖</span>
          </div>
        ))}
      </div>

      <label>Company Logo (Optional)</label>
      <input type="file" accept="image/*" onChange={handleLogoUpload} />
      {companyLogo && (
        <img
          src={companyLogo}
          alt="Company Logo"
          className="company-logo-preview"
        />
      )}

      <button type="submit">Post</button>
    </div>
  );
};

export default JobPostingForm;
