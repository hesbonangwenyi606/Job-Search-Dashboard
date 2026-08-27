import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ApplicationChart = ({ applications = [] }) => {

  // ================= COUNTS =================

  const totalApplications = applications.length;

  const interviewCount = applications.filter(
    (application) =>
      application.applicationStatus === "Interview"
  ).length;

  const rejectedCount = applications.filter(
    (application) =>
      application.applicationStatus === "Rejected"
  ).length;

  const offerCount = applications.filter(
    (application) =>
      application.applicationStatus === "Selected"
  ).length;


  // ================= CHART DATA =================

  const data = [
    {
      date: "Applications",
      applied: totalApplications,
      interview: interviewCount,
      rejected: rejectedCount,
      offer: offerCount,
    },
  ];


  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-xl
        border
        border-gray-100
        bg-white
        p-4
        shadow-sm
        sm:p-6
      "
    >

      {/* ================= HEADER ================= */}

      <div
        className="
          mb-5
          flex
          items-center
          justify-between
          gap-3
          sm:mb-6
        "
      >

        <h2
          className="
            text-base
            font-semibold
            text-gray-900
            sm:text-lg
          "
        >
          Application Overview
        </h2>


        <button
          className="
            shrink-0
            rounded-lg
            border
            border-gray-200
            bg-gray-50
            px-3
            py-2
            text-xs
            text-gray-600
            transition
            hover:bg-gray-100
            sm:px-4
            sm:text-sm
          "
        >
          This Month
        </button>

      </div>


      {/* ================= CHART ================= */}

      <div
        className="
          h-[240px]
          w-full
          sm:h-[280px]
          lg:h-[320px]
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 10,
            }}
          >

            {/* Grid */}

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />


            {/* X Axis */}

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9CA3AF",
                fontSize: 11,
              }}
            />


            {/* Y Axis */}

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9CA3AF",
                fontSize: 11,
              }}
              allowDecimals={false}
            />


            {/* Tooltip */}

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
              labelStyle={{
                color: "#fff",
                marginBottom: "6px",
              }}
            />


            {/* Applied */}

            <Area
              type="monotone"
              dataKey="applied"
              stroke="#6366F1"
              fill="#6366F1"
              fillOpacity={0.12}
              strokeWidth={3}
            />


            {/* Interview */}

            <Line
              type="monotone"
              dataKey="interview"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />


            {/* Rejected */}

            <Line
              type="monotone"
              dataKey="rejected"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
            />


            {/* Offer */}

            <Line
              type="monotone"
              dataKey="offer"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>


      {/* ================= LEGEND ================= */}

      <div
        className="
          mt-4
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-4
          gap-y-2
          sm:mt-5
          sm:gap-x-6
        "
      >

        {/* Applied */}

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />

          <span className="text-xs text-gray-500">
            Applied
          </span>
        </div>


        {/* Interview */}

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

          <span className="text-xs text-gray-500">
            Interview
          </span>
        </div>


        {/* Rejected */}

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

          <span className="text-xs text-gray-500">
            Rejected
          </span>
        </div>


        {/* Offer */}

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

          <span className="text-xs text-gray-500">
            Offer
          </span>
        </div>

      </div>

    </div>
  );
};

export default ApplicationChart;