import React from "react";
import { useNavigate } from "react-router-dom";

import StatCard from "../components/StatCard";

import { FaBriefcase } from "react-icons/fa";
import { MdVideoCameraFront } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";

import ApplicationChart from "../components/ApplicationCharts";
import RecentApplications from "../components/RecentApplications";
import RecentActivity from "../components/RecentActivity";
import ExploreOpportunities from "../components/ExploreOpportunities";

const Dashboard = ({
  savedJobs = [],
  applications = [],
}) => {
  const navigate = useNavigate();

  // Count interviews
  const interviewCount = applications.filter(
    (application) =>
      application.applicationStatus === "Interview"
  ).length;

  // Count selected applications
  const offerCount = applications.filter(
    (application) =>
      application.applicationStatus === "Selected"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      <div
        className="
          w-full
          px-4
          pb-6
          pt-3
          sm:px-6
          sm:pb-8
          sm:pt-4
          lg:px-8
        "
      >

        {/* ================= GREETING ================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div className="min-w-0">

            <h1
              className="
                text-2xl
                font-bold
                text-gray-900
                dark:text-white
                sm:text-3xl
              "
            >
              Welcome back 👋
            </h1>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-gray-500
                dark:text-gray-400
                sm:text-base
              "
            >
              Here's what's happening with your job search today.
            </p>

          </div>


          {/* Find Jobs Button */}

          <button
            onClick={() => navigate("/find-jobs")}
            className="
              w-full
              rounded-lg
              bg-purple-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-purple-700
              sm:w-auto
              sm:shrink-0
              sm:text-base
            "
          >
            Find Jobs
          </button>

        </div>


        {/* ================= STAT CARDS ================= */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-4
            sm:mt-8
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
            lg:gap-6
          "
        >

          <StatCard
            value={applications.length}
            label="Applications"
            icon={<FaBriefcase size={20} />}
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
            percentage="0"
          />

          <StatCard
            value={interviewCount}
            label="Interviews"
            icon={<FaBriefcase size={20} />}
            iconBg="bg-green-100"
            iconColor="text-green-600"
            percentage="0"
          />

          <StatCard
            value={offerCount}
            label="Offers"
            icon={<MdVideoCameraFront size={22} />}
            iconBg="bg-amber-100"
            iconColor="text-amber-600"
            percentage="0"
          />

          <StatCard
            value={savedJobs.length}
            label="Saved Jobs"
            icon={<IoBookmark size={20} />}
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            percentage="0"
          />

        </div>


        {/* ================= LOWER DASHBOARD ================= */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-6
            sm:mt-8
            lg:grid-cols-3
          "
        >

          {/* ================= LEFT SIDE ================= */}

          <div
            className="
              min-w-0
              lg:col-span-2
            "
          >

            {/* Application Chart */}

            <div className="min-w-0 overflow-hidden">
              <ApplicationChart  applications={applications}/>
            </div>


            {/* Recent Applications */}

            <div className="mt-6 min-w-0 overflow-hidden">

              <RecentApplications
                applications={applications}
              />

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div
            className="
              min-w-0
              space-y-6
            "
          >

            <RecentActivity applications={applications}/>

            <ExploreOpportunities />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;