import React, { useEffect, useState } from "react";

const Resume = () => {
  const [resume, setResume] = useState(null);

  // ================= LOAD SAVED RESUME =================

  useEffect(() => {
    const savedResume = localStorage.getItem("JobSphereResume");

    if (savedResume) {
      setResume(JSON.parse(savedResume));
    }
  }, []);


  // ================= UPLOAD RESUME =================

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    const resumeData = {
      name: file.name,
      type: file.type,
      size: file.size,
      uploadedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "JobSphereResume",
      JSON.stringify(resumeData)
    );

    setResume(resumeData);

    // Reset input so the same file can be selected again
    event.target.value = "";
  };


  // ================= REMOVE RESUME =================

  const removeResume = () => {
    localStorage.removeItem("JobSphereResume");
    setResume(null);
  };


  // ================= FORMAT FILE SIZE =================

  const formatFileSize = (bytes) => {
    if (bytes < 1024) {
      return `${bytes} Bytes`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };


  // ================= FORMAT DATE =================

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };


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
          Resume
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
          Upload and manage your resume for job applications.
        </p>

      </div>


      {/* ================= UPLOAD SECTION ================= */}

      {!resume && (

        <div
          className="
            mt-6
            rounded-2xl
            bg-white
            p-6
            shadow-sm
            dark:bg-gray-800
            sm:mt-8
            sm:p-10
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >

            {/* Icon */}

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-purple-100
                text-2xl
                sm:h-16
                sm:w-16
                sm:text-3xl
              "
            >
              📄
            </div>


            {/* Heading */}

            <h2
              className="
                mt-5
                text-lg
                font-bold
                text-gray-900
                dark:text-white
                sm:text-xl
              "
            >
              Upload your resume
            </h2>


            {/* Description */}

            <p
              className="
                mt-2
                max-w-md
                text-sm
                leading-5
                text-gray-500
                dark:text-gray-400
              "
            >
              Upload your latest resume so you can easily use it
              when applying for jobs.
            </p>


            {/* Upload Button */}

            <label
              className="
                mt-6
                flex
                w-full
                cursor-pointer
                items-center
                justify-center
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
              Upload Resume

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="hidden"
              />

            </label>


            {/* File Types */}

            <p
              className="
                mt-3
                text-xs
                text-gray-400
              "
            >
              PDF, DOC or DOCX
            </p>

          </div>

        </div>
      )}


      {/* ================= UPLOADED RESUME ================= */}

      {resume && (

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
          "
        >

          {/* ================= HEADER ================= */}

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

              <h2
                className="
                  text-lg
                  font-bold
                  text-gray-900
                  dark:text-white
                  sm:text-xl
                "
              >
                Your Resume
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  leading-5
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Your resume is ready to use for job applications.
              </p>

            </div>


            {/* Replace */}

            <label
              className="
                flex
                w-full
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                border
                border-gray-200
                px-4
                py-2
                text-sm
                font-medium
                text-gray-700
                transition
                hover:bg-gray-50
                dark:border-gray-600
                dark:text-gray-200
                dark:hover:bg-gray-700
                sm:w-auto
              "
            >
              Replace Resume

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="hidden"
              />

            </label>

          </div>


          {/* ================= RESUME CARD ================= */}

          <div
            className="
              mt-6
              flex
              flex-col
              gap-4
              rounded-xl
              border
              border-gray-200
              p-4
              dark:border-gray-600
              sm:p-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            {/* File Info */}

            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
                sm:gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-purple-100
                  text-xl
                  sm:h-12
                  sm:w-12
                  sm:text-2xl
                "
              >
                📄
              </div>


              <div className="min-w-0">

                <h3
                  className="
                    break-all
                    text-sm
                    font-semibold
                    text-gray-900
                    dark:text-white
                    sm:text-base
                  "
                >
                  {resume.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                    sm:text-sm
                  "
                >
                  {formatFileSize(resume.size)}
                  {" • "}
                  Uploaded {formatDate(resume.uploadedAt)}
                </p>

              </div>

            </div>


            {/* Remove */}

            <button
              onClick={removeResume}
              className="
                w-full
                rounded-lg
                px-4
                py-2
                text-sm
                font-medium
                text-red-500
                transition
                hover:bg-red-50
                sm:w-auto
              "
            >
              Remove
            </button>

          </div>


          {/* ================= STATUS ================= */}

          <div
            className="
              mt-5
              flex
              items-start
              gap-2
              text-sm
              text-green-600
            "
          >

            <span
              className="
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-xs
              "
            >
              ✓
            </span>

            <span>
              Resume ready for applications
            </span>

          </div>

        </div>
      )}

    </div>
  );
};

export default Resume;