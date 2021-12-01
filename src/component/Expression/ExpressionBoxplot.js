import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import { readString, readRemoteFile } from "react-papaparse";
import ReactEcharts from "echarts-for-react";
import BoxplotOption from "./echartJS/BoxplotOption";
import { prepareBoxplotData } from "echarts/extension/dataTool";

const useStyles = makeStyles((theme) => ({}));

export default function ExpressionBoxplot(props) {
  const classes = useStyles();
  const [TMM, setTMM] = useState(null);
  const [targetGene, setTargetGene] = useState("BRCA1");

  const [plotReady, setPlotReady] = useState(false);
  const [option, setOption] = useState([]);

  useEffect(() => {
    if (props.expressionGene) {
      setTargetGene(props.expressionGene);
    }
  }, [props.expressionGene]);

  useEffect(() => {
    if (TMM !== null && targetGene !== null) {
      let newOption = CreateBoxplot();
      if (newOption.plotReady) {
        setPlotReady(newOption.plotReady);
        setOption(newOption.option);
      } else {
        setPlotReady(false);
      }
    }
  }, [targetGene, TMM]);

  useEffect(() => {
    // dispatch(fetchTable(props.tableName.replace(/[ ]/gi, '_').toLowerCase()))
    const result = readRemoteFile(
      "https://raw.githubusercontent.com/YuanTian1991/crc-igv/master/data/TmmSymbol.csv",
      {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        delimitersToGuess: [",", " ", "|", "\t"],
        complete: (results) => {
          setTMM(results.data);
        },
      }
    );
  }, []);

  const CreateBoxplot = () => {
    let geneColumn = TMM.filter((x) => x.geneSymbol === targetGene);
    console.log(geneColumn);

    if (geneColumn.length === 0) return { plotReady: false };
    let flattenData = [];
    Object.keys(geneColumn[0]).forEach((k, index) => {
      if (k !== "geneSymbol") {
        flattenData.push({
          keyX: k.substring(0, 2),
          keyY: geneColumn[0][k],
          sample: k,
        });
      }
    });

    let groupedByxAxis = flattenData.reduce((acc, item) => {
      acc[item["keyX"]] = [...(acc[item["keyX"]] || []), item["keyY"]];
      return acc;
    }, {});

    let labels = Object.keys(groupedByxAxis);
    let tmpData = prepareBoxplotData(Object.values(groupedByxAxis));

    let n = 0.1;

    let dots = flattenData.map((item) => {
      return [
        labels.indexOf(item.keyX) + Math.random() * (n - -n) + -n,
        item.keyY,
        item.keyX,
        item["sample"],
      ];
    });

    const newBoxplotOption = JSON.parse(JSON.stringify(BoxplotOption));

    newBoxplotOption.title.text =
      "Boxplot of Genes on " + targetGene.toUpperCase();
    newBoxplotOption.xAxis[0].data = labels;
    newBoxplotOption.xAxis[0].name = "Genes";
    newBoxplotOption.xAxis[1].max = labels.length - 0.5;

    newBoxplotOption.yAxis.name = "RNA-seq Expression";
    newBoxplotOption.series[0].data = tmpData.boxData;
    // newBoxplotOption.series[1].name = yAxis.name;
    // newBoxplotOption.series[1].data = tmpData.outliers;
    newBoxplotOption.series[1].data = dots;
    newBoxplotOption.tooltip.formatter = function (params) {
      if (params.componentSubType === "boxplot") {
        var quantileState = [
          "Box of <b>" + params.name + "</b>",
          "&nbsp;&nbsp;upper: <b>" +
            Math.round((params.data[5] + Number.EPSILON) * 100) / 100 +
            "</b>",
          "&nbsp;&nbsp;Q3: <b>" +
            Math.round((params.data[4] + Number.EPSILON) * 100) / 100 +
            "</b>",
          "&nbsp;&nbsp;median: <b>" +
            Math.round((params.data[3] + Number.EPSILON) * 100) / 100 +
            "</b>",
          "&nbsp;&nbsp;Q1: <b>" +
            Math.round((params.data[2] + Number.EPSILON) * 100) / 100 +
            "</b>",
          "&nbsp;&nbsp;lower: <b>" +
            Math.round((params.data[1] + Number.EPSILON) * 100) / 100 +
            "</b>",
        ].join("<br/>");
      } else {
        var quantileState =
          "<b>" +
          params.data[3] +
          "</b><br/>" +
          `Gene (x-axis): <b>${params.data[2]}</b><br />` +
          `${targetGene} (y-axis): <b>${params.data[1]}</b><br />`;
      }

      return quantileState;
    };

    return {
      option: newBoxplotOption,
      plotReady: true,
    };
  };

  return (
    <>
      <TextField
        value={targetGene}
        onChange={(event) => setTargetGene(event.target.value)}
      />
      {plotReady && (
        <ReactEcharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          style={{ height: "30em" }}
        />
      )}
    </>
  );
}
