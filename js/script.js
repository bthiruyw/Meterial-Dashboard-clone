// line Chart 1

var lineChart = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.0)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0,0, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          console.log(tooltipItem);
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});

// line chart 2
var lineChart = document.getElementById("lineChart2").getContext("2d");
var myChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [15, 20, 10, 9, 12],
        backgroundColor: [
          "rgba(255, 99, 132, 0.0)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          console.log(tooltipItem);
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});

// pie Chart
var pieChart = document.getElementById("pieChart").getContext("2d");
const data = {
  datasets: [
    {
      data: [200, 50, 100, 80],
      backgroundColor: [
        "rgba(0, 0, 0,0.1)",
        "rgba(0, 0, 255,0.3)",
        "rgba(0, 0, 255,0.5)",
        "rgba(0, 0, 255,0.8)",
      ],
      hoverOffset: 4,
    },
  ],
};
var myChart = new Chart(pieChart, {
  type: "doughnut",
  data: data,
});

// bar chart

var barChart = document.getElementById("barChart").getContext("2d");

const Bardata = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 70, 90, 60, 65],
      backgroundColor: [
        "rgba(0, 0, 255,0.2)",
        "rgba(0, 0, 255,0.2)",
        "rgba(0, 0, 255,0.2)",
        "rgba(0, 0, 255,0.2)",
        "rgba(0, 0, 255,0.8)",
        "rgba(0, 0, 255,0.2)",
        "rgba(0, 0, 255,0.2)",
      ],
    },
  ],
};
var myChart = new Chart(barChart, {
  type: "bar",
  data: Bardata,
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          console.log(tooltipItem);
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});

// line chart 3
var lineChart = document.getElementById("lineChartThree").getContext("2d");
var myChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [15, 20, 10, 9, 12],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          console.log(tooltipItem);
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      xAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  },
});
