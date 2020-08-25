import React from "react";
import { Line, Pie } from "react-chartjs-2";

export default function Chart({ data }) {
  return (
    <div className="dashboard__main-chart">
      <div>
        <Line data={data} options={{ responsive: true }} />
      </div>
      <div>
        <Pie data={data} options={{ responsive: true }} />
      </div>
    </div>
  );
}
