import "./App.css";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import Job from "./Components/Job/Job";
import Header from "./Components/Navbar/Header";
import CustomFooter from "./Components/CustomFooter/CustomFooter";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import JobDetails from "./Components/JobDetails/JobDetails";
import FeedbackForm from "./Components/Feedback/FeedbackForm";
import ApplicationForm from "./Components/Application/Form";
import JobPosting from "./Components/PostJob/JobPosting";
import { useState } from "react";
import PreviewFeedback from "./Components/PreviewFeedBack/PreviewFeedback";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbarOnPaths = ["/auth"]; // List of paths where navbar should be hidden

  return (
    <>
      {/* Show Navbar on all pages except those in hideNavbarOnPaths */}

      {!hideNavbarOnPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/jobsDetails" element={<JobDetails />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/jobApp" element={<ApplicationForm />} />
        <Route path="/create_job" element={<JobPosting />} />
        <Route path="/preview_feedback" element={<PreviewFeedback />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>

      <CustomFooter />
    </>
  );
}

export default App;
