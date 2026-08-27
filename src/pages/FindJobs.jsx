import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { searchJobs } from "../services/jobApi";

const FindJobs = ({
  savedJobs = [],
  saveJob,
  applyJob,
  applications = [],
}) => {
  const [searchParams] = useSearchParams();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // ================= SEARCH JOBS =================

  const handleSearch = async (searchKeyword = keyword) => {
    if (!searchKeyword.trim() && !location.trim()) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await searchJobs(
        searchKeyword || "jobs",
        location || "India"
      );

      setJobs(results);
    } catch (error) {
      setError(
        "Unable to fetch jobs. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  // ================= DASHBOARD SEARCH =================

  useEffect(() => {
    const searchValue = searchParams.get("search");

    if (!searchValue) {
      return;
    }

    const loadJobs = async () => {
      try {
        setKeyword(searchValue);

        setLoading(true);
        setError("");

        const results = await searchJobs(
          searchValue,
          location || "India"
        );

        setJobs(results);
      } catch (error) {
        setError(
          "Unable to fetch jobs. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [searchParams]);


  return (
    <div
      className="
        min-h-screen
        bg-gray-100
        p-4
        dark:bg-gray-900
        sm:p-6
        lg:p-8
      "
    >

      {/* ================= HEADER ================= */}

      <div>
        <h1
          className="
            text-2xl
            font-bold
            text-gray-900
            dark:text-white
            sm:text-3xl
          "
        >
          Find Jobs
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-gray-500
            dark:text-gray-400
            sm:text-base
          "
        >
          Discover opportunities that match your skills.
        </p>
      </div>


      {/* ================= SEARCH ================= */}

      <div
        className="
          mt-6
          grid
          w-full
          max-w-5xl
          grid-cols-1
          gap-3
          sm:mt-8
          md:grid-cols-2
          lg:grid-cols-[1fr_220px_auto]
        "
      >

        {/* Keyword */}

        <div
          className="
            flex
            min-w-0
            items-center
            rounded-lg
            bg-white
            px-4
            py-3
            shadow-sm
            dark:bg-gray-800
          "
        >
          <IoSearch
            className="mr-3 shrink-0 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Job title or keyword"
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="
              min-w-0
              w-full
              bg-transparent
              text-sm
              text-gray-700
              outline-none
              dark:text-gray-100
            "
          />
        </div>


        {/* Location */}

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            w-full
            rounded-lg
            bg-white
            px-4
            py-3
            text-sm
            text-gray-700
            shadow-sm
            outline-none
            dark:bg-gray-800
            dark:text-gray-100
          "
        />


        {/* Search Button */}

        <button
          onClick={() => handleSearch()}
          disabled={loading}
          className="
            w-full
            rounded-lg
            bg-purple-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-purple-700
            disabled:cursor-not-allowed
            disabled:opacity-60
            md:col-span-2
            lg:col-span-1
          "
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>


      {/* ================= ERROR ================= */}

      {error && (
        <div
          className="
            mt-6
            rounded-lg
            bg-red-50
            p-4
            text-sm
            text-red-600
          "
        >
          {error}
        </div>
      )}


      {/* ================= LOADING ================= */}

      {loading && (
        <div
          className="
            mt-8
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          Searching for jobs...
        </div>
      )}


      {/* ================= RESULTS ================= */}

      {!loading && jobs.length > 0 && (
        <div className="mt-7 sm:mt-8">

          {/* Result Count */}

          <p
            className="
              mb-4
              text-sm
              font-medium
              text-gray-500
              dark:text-gray-400
            "
          >
            {jobs.length} jobs found
          </p>


          {/* Jobs */}

          <div className="space-y-4">

            {jobs.map((job) => {

              // ================= SAVED =================

              const isSaved = savedJobs.some(
                (savedJob) =>
                  savedJob.id === job.id
              );


              // ================= APPLIED =================

              const isApplied = applications.some(
                (application) =>
                  application.id === job.id
              );


              return (
                <div
                  key={job.id}
                  className="
                    w-full
                    rounded-xl
                    bg-white
                    p-4
                    shadow-sm
                    transition
                    hover:shadow-md
                    dark:bg-gray-800
                    sm:p-6
                  "
                >

                  {/* ================= TOP ================= */}

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >

                    {/* Job Information */}

                    <div className="min-w-0 flex-1">

                      <h2
                        className="
                          break-words
                          text-base
                          font-bold
                          text-gray-900
                          dark:text-white
                          sm:text-lg
                        "
                      >
                        {job.title}
                      </h2>

                      <p
                        className="
                          mt-1
                          break-words
                          text-sm
                          text-gray-600
                          dark:text-gray-300
                        "
                      >
                        {job.company?.display_name ||
                          "Company not available"}
                      </p>

                    </div>


                    {/* ================= SAVE BUTTON ================= */}

                    <button
                      onClick={() => saveJob(job)}
                      aria-label={
                        isSaved
                          ? "Remove saved job"
                          : "Save job"
                      }
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition
                        ${
                          isSaved
                            ? "bg-purple-100 text-purple-600"
                            : "text-gray-400 hover:bg-purple-50 hover:text-purple-600"
                        }
                      `}
                    >
                      {isSaved ? (
                        <FaHeart size={18} />
                      ) : (
                        <FaRegHeart size={18} />
                      )}
                    </button>

                  </div>


                  {/* ================= JOB INFORMATION ================= */}

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-x-4
                      gap-y-2
                      text-xs
                      text-gray-500
                      dark:text-gray-400
                      sm:text-sm
                    "
                  >

                    {/* Location */}

                    <span className="max-w-full break-words">
                      📍{" "}
                      {job.location?.display_name ||
                        "Location unavailable"}
                    </span>


                    {/* Salary */}

                    {job.salary_min && (
                      <span>
                        ₹ {job.salary_min}+
                      </span>
                    )}

                  </div>


                  {/* ================= DESCRIPTION ================= */}

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      text-xs
                      leading-5
                      text-gray-500
                      dark:text-gray-400
                      sm:text-sm
                    "
                  >
                    {job.description}
                  </p>


                  {/* ================= APPLY ================= */}

                  <div className="mt-5">

                    {isApplied ? (

                      <button
                        disabled
                        className="
                          w-full
                          cursor-not-allowed
                          rounded-lg
                          bg-green-100
                          px-5
                          py-2.5
                          text-sm
                          font-semibold
                          text-green-600
                          sm:w-auto
                        "
                      >
                        ✓ Applied
                      </button>

                    ) : (

                      <button
                        onClick={() => {
                          applyJob(job);

                          if (job.redirect_url) {
                            window.open(
                              job.redirect_url,
                              "_blank"
                            );
                          }
                        }}
                        className="
                          w-full
                          rounded-lg
                          bg-purple-600
                          px-5
                          py-2.5
                          text-sm
                          font-semibold
                          text-white
                          transition
                          hover:bg-purple-700
                          sm:w-auto
                        "
                      >
                        Apply Now
                      </button>

                    )}

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      )}


      {/* ================= EMPTY STATE ================= */}

      {!loading &&
        !error &&
        jobs.length === 0 && (

          <div
            className="
              mt-8
              rounded-xl
              bg-white
              p-8
              text-center
              shadow-sm
              sm:mt-12
              sm:p-10
              dark:bg-gray-800
            "
          >

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-purple-100
                text-purple-600
              "
            >
              <IoSearch size={22} />
            </div>

            <h2
              className="
                mt-4
                text-base
                font-semibold
                text-gray-700
                dark:text-gray-200
              "
            >
              Search for jobs
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              Enter a job title and location to find
              opportunities.
            </p>

          </div>
        )}

    </div>
  );
};

export default FindJobs;