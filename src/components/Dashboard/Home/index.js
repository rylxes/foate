import {useState, useEffect} from 'react';
import Chart from "./Chart";
import Table from "./Table";


export default function index() {
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
    <div>
      <Chart data={chartData} />
      <Table />
    </div>
  )
}
