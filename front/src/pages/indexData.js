export const treeData = {
  series: [
    {
      data: [
        {
          x: "France",
          y: 567,
        },
        {
          x: "Mexico",
          y: 588,
        },
        {
          x: "Italy",
          y: 504,
        },
        {
          x: "US",
          y: 441,
        },
        {
          x: "England",
          y: 420,
        },
        {
          x: "Chile",
          y: 400,
        },
        {
          x: "Australia",
          y: 440,
        },
        {
          x: "Croatia",
          y: 380,
        },
        {
          x: "South Africa",
          y: 380,
        },
        {
          x: "Slovenia",
          y: 400,
        },
        {
          x: "Lebanon",
          y: 378,
        },
        {
          x: "Uruguay",
          y: 400,
        },
        {
          x: "Hungary",
          y: 252,
        },
        {
          x: "New Zealand",
          y: 315,
        },
        {
          x: "Germany",
          y: 315,
        },
        {
          x: "Spain",
          y: 400,
        },
        {
          x: "Romania",
          y: 360,
        },
        {
          x: "Canada",
          y: 420,
        },
        {
          x: "Portugal",
          y: 242,
        },
        {
          x: "Moldova",
          y: 78,
        },
        {
          x: "Turkey",
          y: 195,
        },
        {
          x: "Argentina",
          y: 360,
        },
        {
          x: "Israel",
          y: 324,
        },
        {
          x: "Austria",
          y: 360,
        },
        {
          x: "Greece",
          y: 176,
        },
        {
          x: "Bulgaria",
          y: 224,
        },
        {
          x: "Switzerland",
          y: 176,
        },
        {
          x: "Morocco",
          y: 195,
        },
        {
          x: "Georgia",
          y: 180,
        },
      ],
    },
  ],
  legend: {
    show: false,
  },
  chart: {
    height: 350,
    type: "treemap",
  },
  colors: [
    "#3B93A5",
    "#F7B844",
    "#ADD8C7",
    "#EC3C65",
    "#CDD7B6",
    "#C1F666",
    "#D43F97",
    "#1E5D8C",
    "#421243",
    "#7F94B0",
    "#EF6537",
    "#C0ADDB",
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false,
    },
  },
};

export const pieData = {
  series: [100, 75, 10, 5, 5],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: [
    "6.4만원 이하",
    "12.7만원 이하",
    "19만원 이하",
    "25.4만원 이하",
    "25.4만원 초과",
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

export const barData = {
  series: [
    {
      data: [10.1, 7.9, 9.8, 6.2, 6.3],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["South Korea", "Japan", "US", "WorldEast", "Asia&Pacific"],
  },
};

export const lineData = {
  series: [
    {
      name: "와인 소비량",
      data: [4.2, 4.3, 4.4, 5.4, 6.4, 6.45, 6.5, 6.47],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "2000.0",
      "2002.5",
      "2005.0",
      "2007.5",
      "2010.0",
      "2012.5",
      "2015.0",
      "2017.5",
    ],
  },
};
