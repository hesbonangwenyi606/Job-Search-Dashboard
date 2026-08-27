import React, { useEffect, useState } from "react";

const Settings = ({
  darkMode,
  toggleDarkMode,
}) => {

  // ================= JOB PREFERENCES =================

  const [preferences, setPreferences] = useState({
    jobTitle: "",
    location: "",
    workPreference: "Any",
  });


  // ================= NOTIFICATIONS =================

  const [notifications, setNotifications] = useState({
    jobAlerts: true,
    applicationUpdates: true,
    interviewReminders: true,
  });


  // ================= LOAD SAVED SETTINGS =================

  useEffect(() => {

    const savedPreferences =
      localStorage.getItem(
        "JobSpherePreferences"
      );

    const savedNotifications =
      localStorage.getItem(
        "JobSphereNotifications"
      );


    if (savedPreferences) {

      setPreferences(
        JSON.parse(savedPreferences)
      );

    }


    if (savedNotifications) {

      setNotifications(
        JSON.parse(savedNotifications)
      );

    }

  }, []);


  // ================= JOB PREFERENCES =================

  const handlePreferenceChange = (e) => {

    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });

  };


  const handleSavePreferences = () => {

    localStorage.setItem(
      "JobSpherePreferences",
      JSON.stringify(preferences)
    );

    alert("Job preferences saved!");

  };


  // ================= NOTIFICATIONS =================

  const handleNotificationChange = (type) => {

    const updatedNotifications = {
      ...notifications,
      [type]: !notifications[type],
    };

    setNotifications(
      updatedNotifications
    );

    localStorage.setItem(
      "JobSphereNotifications",
      JSON.stringify(
        updatedNotifications
      )
    );

  };


  return (

    <div
      className="
        min-h-screen
        bg-gray-100
        p-4
        sm:p-6
        lg:p-8
        dark:bg-gray-900
      "
    >

      {/* ================= HEADER ================= */}

      <div className="mb-8">

        <h1
          className="
            text-3xl
            font-bold
            text-gray-900
            dark:text-white
          "
        >
          Settings
        </h1>

        <p
          className="
            mt-1
            text-gray-500
            dark:text-gray-400
          "
        >
          Manage your JobSphere preferences
        </p>

      </div>


      {/* ================= JOB PREFERENCES ================= */}

      <div
        className="
          mb-6
          rounded-xl
          bg-white
          p-6
          shadow-sm
          dark:bg-gray-800
        "
      >

        <h2
          className="
            mb-1
            text-lg
            font-semibold
            text-gray-900
            dark:text-white
          "
        >
          Job Preferences
        </h2>

        <p
          className="
            mb-6
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          Customize the type of jobs you want to find.
        </p>


        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* JOB TITLE */}

          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              Preferred Job Title
            </label>

            <input
              type="text"
              name="jobTitle"
              value={preferences.jobTitle}
              onChange={handlePreferenceChange}
              placeholder="e.g. React Developer"
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                py-3
                text-gray-900
                outline-none
                placeholder:text-gray-400
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-200

                dark:border-gray-600
                dark:bg-gray-700
                dark:text-white
              "
            />

          </div>


          {/* LOCATION */}

          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              Preferred Location
            </label>

            <input
              type="text"
              name="location"
              value={preferences.location}
              onChange={handlePreferenceChange}
              placeholder="e.g. Pune"
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                py-3
                text-gray-900
                outline-none
                placeholder:text-gray-400
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-200

                dark:border-gray-600
                dark:bg-gray-700
                dark:text-white
              "
            />

          </div>

        </div>


        {/* WORK PREFERENCE */}

        <div className="mt-5">

          <label
            className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-300
            "
          >
            Work Preference
          </label>

          <select
            name="workPreference"
            value={preferences.workPreference}
            onChange={handlePreferenceChange}
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              focus:border-purple-500
              focus:ring-2
              focus:ring-purple-200

              dark:border-gray-600
              dark:bg-gray-700
              dark:text-white
            "
          >

            <option value="Any">
              Any
            </option>

            <option value="Remote">
              Remote
            </option>

            <option value="Hybrid">
              Hybrid
            </option>

            <option value="On-site">
              On-site
            </option>

          </select>

        </div>


        {/* SAVE */}

        <button
          onClick={handleSavePreferences}
          className="
            mt-6
            rounded-lg
            bg-purple-600
            px-5
            py-2.5
            font-medium
            text-white
            transition
            hover:bg-purple-700
          "
        >
          Save Preferences
        </button>

      </div>


      {/* ================= NOTIFICATIONS ================= */}

      <div
        className="
          mb-6
          rounded-xl
          bg-white
          p-6
          shadow-sm
          dark:bg-gray-800
        "
      >

        <h2
          className="
            mb-1
            text-lg
            font-semibold
            text-gray-900
            dark:text-white
          "
        >
          Notifications
        </h2>

        <p
          className="
            mb-6
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          Choose which notifications you want to receive.
        </p>


        <div className="space-y-6">

          {/* JOB ALERTS */}

          <div className="flex items-center justify-between gap-4">

            <div>

              <p
                className="
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
              >
                Job Alerts
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Receive notifications about new job opportunities.
              </p>

            </div>

            <input
              type="checkbox"
              checked={notifications.jobAlerts}
              onChange={() =>
                handleNotificationChange(
                  "jobAlerts"
                )
              }
              className="h-5 w-5 accent-purple-600"
            />

          </div>


          {/* APPLICATION UPDATES */}

          <div className="flex items-center justify-between gap-4">

            <div>

              <p
                className="
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
              >
                Application Updates
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Get notified when your application status changes.
              </p>

            </div>

            <input
              type="checkbox"
              checked={
                notifications.applicationUpdates
              }
              onChange={() =>
                handleNotificationChange(
                  "applicationUpdates"
                )
              }
              className="h-5 w-5 accent-purple-600"
            />

          </div>


          {/* INTERVIEW REMINDERS */}

          <div className="flex items-center justify-between gap-4">

            <div>

              <p
                className="
                  font-medium
                  text-gray-800
                  dark:text-gray-200
                "
              >
                Interview Reminders
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Receive reminders for upcoming interviews.
              </p>

            </div>

            <input
              type="checkbox"
              checked={
                notifications.interviewReminders
              }
              onChange={() =>
                handleNotificationChange(
                  "interviewReminders"
                )
              }
              className="h-5 w-5 accent-purple-600"
            />

          </div>

        </div>

      </div>


      {/* ================= APPEARANCE ================= */}

      <div
        className="
          rounded-xl
          bg-white
          p-6
          shadow-sm
          dark:bg-gray-800
        "
      >

        <h2
          className="
            mb-1
            text-lg
            font-semibold
            text-gray-900
            dark:text-white
          "
        >
          Appearance
        </h2>

        <p
          className="
            mb-6
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          Customize how JobSphere looks.
        </p>


        <div className="flex items-center justify-between gap-4">

          <div>

            <p
              className="
                font-medium
                text-gray-800
                dark:text-gray-200
              "
            >
              Dark Mode
            </p>

            <p
              className="
                mt-1
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              Switch between light and dark appearance.
            </p>

          </div>


          {/* DARK MODE CHECKBOX */}

          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="h-5 w-5 accent-purple-600"
          />

        </div>

      </div>

    </div>
  );
};

export default Settings;