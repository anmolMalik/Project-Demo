import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart() {
  const data = {
    labels: ["Protein", "Bar", "Weight", "Bicycle", "Gripper", "Dumbell"],
    datasets: [
      {
        label: "# of Votes",
        data: [135, 25, 22, 20, 18, 15],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div >
      <h1 style={{ fontFamily: "monospace" }}>
        Product Details
      </h1>
      <Pie data={data} width={50} height={50} />
    </div>
  );
}