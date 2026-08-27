import React from "react";

const StatCard = ({
  value,
  label,
  icon,
  iconBg,
  iconColor,
  percentage,
}) => {
  return (
    <div
      className="
        w-full
        rounded-xl
        border
        border-gray-100
        bg-white
        p-4
        shadow-sm
        sm:p-5
      "
    >

      {/* ================= ICON + NUMBER + LABEL ================= */}

      <div className="flex items-center gap-3 sm:gap-4">

        {/* Icon */}

        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            sm:h-11
            sm:w-11
            ${iconBg}
            ${iconColor}
          `}
        >
          {icon}
        </div>


        {/* Number + Label */}

        <div className="min-w-0">

          <h2
            className="
              text-2xl
              font-bold
              text-gray-900
              sm:text-3xl
            "
          >
            {value}
          </h2>

          <p
            className="
              mt-1
              truncate
              text-sm
              text-gray-500
            "
          >
            {label}
          </p>

        </div>

      </div>


      {/* ================= PERCENTAGE ================= */}

      <p
        className="
          mt-4
          pl-[52px]
          text-xs
          font-medium
          text-green-500
          sm:pl-[60px]
        "
      >
        ↗ {percentage}% this month
      </p>

    </div>
  );
};

export default StatCard;