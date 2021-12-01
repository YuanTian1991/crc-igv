export default {
  title: {
    text: "Expression Boxplot",
    left: "center",
    top: 0,
    triggerEvent: true,
  },
  grid: {
    left: "10%",
    right: "3%",
    bottom: "10%",
    containLabel: true,
  },
  tooltip: {
    backgroundColor: "white",
    trigger: "item",
    axisPointer: {
      animation: true,
      type: "cross",
      lineStyle: {
        type: "dashed",
        width: 1,
      },
    },
    formatter:
      "Data Value (x-axis): {b} <br/> {a} (y-axis): {c0} -  {c1} - {c2}",
  },
  toolbox: {
    feature: {
      dataZoom: {
        title: {
          zoom: "Zoom In",
          back: "Zoom Reset",
        },
      },
      brush: {
        type: ["rect", "polygon", "clear"],
        title: {
          rect: "Rectangle Area",
          polygon: "Random Shape",
          clear: "Area Reset",
        },
      },
      restore: {},
      saveAsImage: {
        title: "Save As Image",
      },
    },
  },
  color: ["#30475e"],
  xAxis: [
    {
      type: "category",
      data: [],
      boundaryGap: true,
      name: "",
      nameGap: 40,
      nameLocation: "middle",
    },
    {
      name: "",
      nameLocation: "middle",
      type: "value",
      scale: true,
      min: -0.5,
      max: 0.5,
      show: false,
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          // width: 2,
          color: "#cfd8dc",
        },
      },
    },
  ],
  yAxis: {
    type: "value",
    name: "",
    nameGap: 60,
    nameLocation: "middle",
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
        color: "#cfd8dc",
      },
    },
  },
  series: [
    {
      name: "boxplot",
      type: "boxplot",
      xAxisIndex: 0,
      boxWidth: 40,
      itemStyle: {
        borderWidth: 1.5,
        // shadowColor: 'rgba(0, 0, 0, 0.5)',
        // shadowBlur: 5,
        color: "#dbe4ed",
      },
      data: [],
    },
    {
      name: "Dots",
      type: "scatter",
      xAxisIndex: 1,
      symbolSize: 5,
      data: [],
    },
  ],
};
