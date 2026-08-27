import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    skills: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // ================= LOAD PROFILE =================

  useEffect(() => {
    const savedProfile = localStorage.getItem("JobSphereProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);


  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };


  // ================= SAVE PROFILE =================

  const handleSave = () => {
    localStorage.setItem(
      "JobSphereProfile",
      JSON.stringify(profile)
    );

    window.dispatchEvent(
      new Event("profileUpdated")
    );

    setIsEditing(false);
  };


  // ================= PROFILE INITIAL =================

  const profileInitial = profile.name
    ? profile.name.charAt(0).toUpperCase()
    : "U";


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
          Profile
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
          Manage your personal information.
        </p>

      </div>


      {/* ================= PROFILE CARD ================= */}

      <div
        className="
          mt-6
          rounded-2xl
          bg-white
          p-4
          shadow-sm
          dark:bg-gray-800
          sm:mt-8
          sm:p-6
          lg:p-8
        "
      >

        {/* ================= PROFILE TOP ================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-b
            border-gray-100
            pb-6
            dark:border-gray-700
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* Profile Information */}

          <div
            className="
              flex
              min-w-0
              items-center
              gap-4
              sm:gap-5
            "
          >

            {/* Avatar */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-purple-100
                text-2xl
                font-bold
                text-purple-600
                sm:h-20
                sm:w-20
                sm:text-3xl
              "
            >
              {profileInitial}
            </div>


            {/* Name */}

            <div className="min-w-0">

              <h2
                className="
                  truncate
                  text-lg
                  font-bold
                  text-gray-900
                  dark:text-white
                  sm:text-xl
                "
              >
                {profile.name || "User"}
              </h2>

              <p
                className="
                  mt-1
                  truncate
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  sm:text-base
                "
              >
                {profile.role || "Your Role"}
              </p>

            </div>

          </div>


          {/* ================= EDIT BUTTON ================= */}

          {!isEditing && (

            <button
              onClick={() => setIsEditing(true)}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-gray-200
                px-4
                py-2.5
                text-sm
                font-semibold
                text-gray-700
                transition
                hover:border-purple-300
                hover:bg-purple-50
                hover:text-purple-600
                dark:border-gray-600
                dark:text-gray-200
                dark:hover:bg-gray-700
                sm:w-auto
              "
            >
              <FiEdit2 size={16} />
              Edit Profile
            </button>

          )}

        </div>


        {/* ================= FORM ================= */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-5
            sm:mt-8
            sm:gap-6
            md:grid-cols-2
          "
        >

          {/* ================= FULL NAME ================= */}

          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-200
              "
            >
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your name"
              className={`
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                dark:text-white
                ${
                  isEditing
                    ? "border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:border-gray-600 dark:bg-gray-700"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700"
                }
              `}
            />

          </div>


          {/* ================= EMAIL ================= */}

          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-200
              "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your email"
              className={`
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                dark:text-white
                ${
                  isEditing
                    ? "border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:border-gray-600 dark:bg-gray-700"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700"
                }
              `}
            />

          </div>


          {/* ================= PHONE ================= */}

          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-200
              "
            >
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your phone"
              className={`
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                dark:text-white
                ${
                  isEditing
                    ? "border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:border-gray-600 dark:bg-gray-700"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700"
                }
              `}
            />

          </div>


          {/* ================= JOB ROLE ================= */}

          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-200
              "
            >
              Job Role
            </label>

            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Frontend Developer"
              className={`
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                dark:text-white
                ${
                  isEditing
                    ? "border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:border-gray-600 dark:bg-gray-700"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700"
                }
              `}
            />

          </div>


          {/* ================= LOCATION ================= */}

          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-200
              "
            >
              Location
            </label>

            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Pune, India"
              className={`
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                dark:text-white
                ${
                  isEditing
                    ? "border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:border-gray-600 dark:bg-gray-700"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700"
                }
              `}
            />

          </div>


          {/* ================= SKILLS ================= */}

          <div>

            <label
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-200
              "
            >
              Skills
            </label>

            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="React, JavaScript, Tailwind"
              className={`
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                dark:text-white
                ${
                  isEditing
                    ? "border-gray-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:border-gray-600 dark:bg-gray-700"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-700"
                }
              `}
            />

          </div>

        </div>


        {/* ================= BUTTONS ================= */}

        {isEditing && (

          <div
            className="
              mt-8
              flex
              flex-col-reverse
              gap-3
              sm:flex-row
              sm:justify-end
            "
          >

            {/* Cancel */}

            <button
              onClick={() => setIsEditing(false)}
              className="
                w-full
                rounded-lg
                border
                border-gray-200
                px-5
                py-3
                text-sm
                font-semibold
                text-gray-600
                transition
                hover:bg-gray-50
                dark:border-gray-600
                dark:text-gray-300
                dark:hover:bg-gray-700
                sm:w-auto
              "
            >
              Cancel
            </button>


            {/* Save */}

            <button
              onClick={handleSave}
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
                sm:w-auto
              "
            >
              Save Changes
            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default Profile;