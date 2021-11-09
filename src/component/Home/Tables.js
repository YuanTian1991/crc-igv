import React, { useState, useEffect } from "react";

import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { readString, readRemoteFile } from "react-papaparse";
import { Column } from "react-base-table";

import GeneCell from "./GeneCell";
import VirtualTable from "./VirtualTable";

export default function Tables(props) {
  const classes = useStyles();
  const [parsedCSV, setParsedCSV] = useState(null);

  useEffect(() => {
    // dispatch(fetchTable(props.tableName.replace(/[ ]/gi, '_').toLowerCase()))
    const result = readRemoteFile(
      "https://raw.githubusercontent.com/YuanTian1991/crc-igv/master/data/" +
        props.geneList,
      {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        delimitersToGuess: [",", "	", "|", "\t"],
        complete: (results) => {
          handleFetchDataSuccess(results.data);
          // setData(results);
        },
      }
    );
  }, [props.geneList]);

  const handleFetchDataSuccess = (tableData) => {
    const tmpColumn = Object.keys(tableData[0]).map((col, colIndex) => {
      let frozen;
      let cellRenderer;
      let width = 100;
      if (col === "geneSymbol") {
        frozen = Column.FrozenDirection.LEFT;
        cellRenderer = ({ cellData, column, rowData }) => {
          return (
            <GeneCell
              cellData={cellData}
              colName={column}
              rowData={rowData}
              selectGene={handleSelectGene}
            />
          );
        };
        width = 150;
      }
      return {
        name: col,
        title: col,
        key: col,
        dataKey: col,
        width: width,
        height: 30,
        resizable: true,
        align: Column.Alignment.CENTER,
        frozen: frozen,
        cellRenderer: cellRenderer,
        // cellRenderer: ({ cellData, column }) => <EditableCell cellData={cellData} colName={column} />,
        sortable: true,
      };
    });
    setParsedCSV({ tableColumn: tmpColumn, tableRow: tableData });
  };

  const handleSelectGene = (gene) => {
    console.log(gene);

    let coordinate = gene.chr + ":" + gene.start + "-" + gene.end;
    props.selectGene(coordinate);
  };

  return (
    <div className={classes.root}>
      {parsedCSV !== null ? (
        <div style={{ border: "1px solid #eeeeee" }}>
          <VirtualTable
            tableColumn={parsedCSV.tableColumn}
            tableRow={parsedCSV.tableRow}
            height={"75vh"}
            rowKey={"geneName"}
          />
        </div>
      ) : (
        <Typography
          variant="body2"
          className="mb-4"
          gutterBottom
          style={{ color: "hsla(0,0%,0%,0.6)" }}
        >
          No data loaded
        </Typography>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));
