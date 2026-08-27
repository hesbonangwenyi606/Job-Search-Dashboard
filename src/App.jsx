import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import FindJobs from "./pages/FindJobs";
import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Resume from "./pages/Resume";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => {

  // ================= SAVED JOBS =================

  const [savedJobs, setSavedJobs] = useState(() => {
    const saved = localStorage.getItem("JobSphereSavedJobs");

    return saved ? JSON.parse(saved) : [];
  });


  // ================= APPLICATIONS =================

  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("JobSphereApplications");

    return saved ? JSON.parse(saved) : [];
  });


  // ================= DARK MODE =================

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode =
      localStorage.getItem("JobSphereDarkMode");

    return savedDarkMode
      ? JSON.parse(savedDarkMode)
      : false;
  });


  // ================= APPLY DARK MODE =================

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem(
      "JobSphereDarkMode",
      JSON.stringify(darkMode)
    );

  }, [darkMode]);


  // ================= TOGGLE DARK MODE =================

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };


  // ================= SAVE JOB =================

  const saveJob = (job) => {

    setSavedJobs((previousJobs) => {

      const alreadySaved = previousJobs.some(
        (savedJob) => savedJob.id === job.id
      );

      if (alreadySaved) {

        const updatedJobs = previousJobs.filter(
          (savedJob) => savedJob.id !== job.id
        );

        localStorage.setItem(
          "JobSphereSavedJobs",
          JSON.stringify(updatedJobs)
        );

        return updatedJobs;
      }

      const updatedJobs = [
        ...previousJobs,
        job,
      ];

      localStorage.setItem(
        "JobSphereSavedJobs",
        JSON.stringify(updatedJobs)
      );

      return updatedJobs;
    });
  };


  // ================= REMOVE SAVED JOB =================

  const removeSavedJob = (jobId) => {

    setSavedJobs((previousJobs) => {

      const updatedJobs = previousJobs.filter(
        (job) => job.id !== jobId
      );

      localStorage.setItem(
        "JobSphereSavedJobs",
        JSON.stringify(updatedJobs)
      );

      return updatedJobs;
    });
  };


  // ================= APPLY JOB =================

  const applyJob = (job) => {

    setApplications((previousApplications) => {

      const alreadyApplied = previousApplications.some(
        (application) => application.id === job.id
      );

      if (alreadyApplied) {
        return previousApplications;
      }

      const application = {
        ...job,
        applicationStatus: "Applied",
        appliedAt: new Date().toISOString(),
      };

      const updatedApplications = [
        ...previousApplications,
        application,
      ];

      localStorage.setItem(
        "JobSphereApplications",
        JSON.stringify(updatedApplications)
      );

      return updatedApplications;
    });
  };


  // ================= UPDATE APPLICATION STATUS =================

  const updateApplicationStatus = (
    jobId,
    newStatus
  ) => {

    setApplications((previousApplications) => {

      const updatedApplications =
        previousApplications.map((application) =>
          application.id === jobId
            ? {
                ...application,
                applicationStatus: newStatus,
              }
            : application
        );

      localStorage.setItem(
        "JobSphereApplications",
        JSON.stringify(updatedApplications)
      );

      return updatedApplications;
    });
  };


  return (
    <BrowserRouter>

      <Routes>

        <Route
          element={
            <Layout
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        >

          {/* ================= DASHBOARD ================= */}

          <Route
            path="/"
            element={
              <Dashboard
                savedJobs={savedJobs}
                applications={applications}
              />
            }
          />


          {/* ================= FIND JOBS ================= */}

          <Route
            path="/find-jobs"
            element={
              <FindJobs
                savedJobs={savedJobs}
                saveJob={saveJob}
                applyJob={applyJob}
                applications={applications}
              />
            }
          />


          {/* ================= SAVED JOBS ================= */}

          <Route
            path="/saved-jobs"
            element={
              <SavedJobs
                savedJobs={savedJobs}
                removeSavedJob={removeSavedJob}
              />
            }
          />


          {/* ================= APPLICATIONS ================= */}

          <Route
            path="/applications"
            element={
              <Applications
                applications={applications}
                updateApplicationStatus={
                  updateApplicationStatus
                }
              />
            }
          />


          {/* ================= INTERVIEWS ================= */}

          <Route
            path="/interviews"
            element={
              <Interviews
                applications={applications}
              />
            }
          />


          {/* ================= RESUME ================= */}

          <Route
            path="/resume"
            element={<Resume />}
          />


          {/* ================= PROFILE ================= */}

          <Route
            path="/profile"
            element={<Profile />}
          />


          {/* ================= SETTINGS ================= */}

          <Route
            path="/settings"
            element={
              <Settings
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default App;