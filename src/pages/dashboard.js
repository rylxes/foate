import React, { useState, useEffect } from "react";
import Head from "next/head";
import { protectPage } from "../util/protectPage";
import Chart from "../components//Dashboard/Chart";
import Table from "../components//Dashboard/Table";

function Dashboard({ users }) {
  // users.success ? console.log(users) : console.log("Null");

  const data = {
    datasets: [
      {
        label: "Number of Invoices",
        data: [4, 7, 3, 9, 5],
        backgroundColor: [
          "rgba(39, 167, 221, 0.7)",
          "rgba(250, 168, 25, 0.7)",
          "rgba(220, 42, 102, 0.7)",
          "rgba(111, 43, 219, 0.7)",
          "rgba(126, 195, 67, 0.7)",
        ],
        borderWidth: 4,
      }
    ],
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  }

  const [chartData, setChartData] = useState({ datasets:[], labels:[]});
  const chart = () => {
    setChartData(data);
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <Head>
        <title>FOATE | Dashboard</title>
      </Head>

      <div className="dashboard">
        <div className="dashboard__sidebar">
          <div className="dashboard__sidebar-header">
            <h2>Welcome Admin</h2>
          </div>
          <div className="dashboard__sidebar-content">
            <ul>
              <li>
                <a href="">
                  <i className="fa fa-users"></i> Home
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-users"></i> Vendors
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-users"></i> Investors
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-users"></i> Tenants
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard__main">
          <div className="dashboard__main-header">
            <h5>
              <i className="fa fa-tachometer"></i> Dashboard
            </h5>
            <span>
              <i className="fa fa-bell"></i>
            </span>
            <span>
              {" "}
              John Doe
              <i className="fa fa-user-circle"></i>
            </span>
          </div>
          <div className="dashboard__main-content">
            <div className="">
              <Chart data={chartData} />
            </div>
            <div className="">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

export const getServerSideProps = async (ctx) => {
  const users = await protectPage("http://localhost:3000/api/users", ctx);
  return {
    props: { users },
  };
};
