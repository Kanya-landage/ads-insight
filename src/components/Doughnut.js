import React from "react";
import { PieChart, Legend, Pie } from "recharts";
import "./Doughnut.css";

const Doughnut = () => {
  const data = [
    { name: "40% Male", value: 400, fill: "#0088FE" },
    { name: "35% Female", value: 300, fill: "#00C49F" },
    { name: "25% Unknown", value: 300, fill: "#FFBB28" },
  ];

  const CustomLegend = (props) => {
    return (
      <>
        <div className="custom-legend">
          {props?.payload.map((entry, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <svg
                className="recharts-surface"
                width="50"
                height="20"
                viewBox="0 0 50 20"
              >
                <rect
                  width="50"
                  height="20"
                  rx="5"
                  ry="5"
                  fill={entry.color}
                ></rect>
              </svg>
              <span
                style={{ color: "#596579", fontWeight: 500, padding: "10px" }}
              >
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <PieChart width={750} height={320}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={90}
          paddingAngle={0}
          dataKey="value"
        ></Pie>
        <Legend content={<CustomLegend />} />
        {/* data key = value property from data array cx = x co ordinate cy = y co ordinate  size of chart = outerRadius - innerRadius  */}
      </PieChart>
    </>
  );
};

export default Doughnut;
