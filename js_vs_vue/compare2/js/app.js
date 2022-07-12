window.addEventListener("load", setup);
const select = document.querySelector("#select");
let apiData;

select.addEventListener("change", filterData);

async function setup() {
  apiData = await getData();
  createGraph(apiData);
}

async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  const labels = data["labels"];
  const moons = data["numberOfMoons"];
  const mass = data["planetaryMass"];
  return { labels, moons, mass };
}

function createLine(apiData) {
  const ctxLine = document.getElementById("planet-chart-line");
  const myChartLine = new Chart(ctxLine, {
    type: "line",
    data: {
      labels: apiData.labels,
      datasets: [
        {
          label: "numberOfMoons",
          data: apiData.moons,
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3,
        },
        {
          label: "planetaryMass",
          data: apiData.mass,
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3,
        },
      ],
    },
    options: {
      events: [],
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25,
            },
          },
        ],
      },
    },
  });
}

function createBar(apiData) {
  const ctxBar = document.getElementById("planet-chart-bar");
  const myChartBar = new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: apiData.labels,
      datasets: [
        {
          label: "numberOfMoons",
          data: apiData.moons,
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3,
        },
        {
          label: "planetaryMass",
          data: apiData.mass,
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3,
        },
      ],
    },
    options: {
      events: [],
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25,
            },
          },
        ],
      },
    },
  });
}

function createGraph(apiData) {
  createLine(apiData);
  createBar(apiData);
}

function filterData(e) {
  const show = e.target.value;
  if (show === "mass") {
    createGraph({ ...apiData, moons: [] });
  } else if (show === "moons") {
    createGraph({ ...apiData, mass: [] });
  } else {
    createGraph({ ...apiData });
  }
}
