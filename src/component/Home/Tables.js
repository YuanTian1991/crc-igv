import React, { useState, useEffect } from "react";

import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { readString, readRemoteFile } from "react-papaparse";
import { Column } from "react-base-table";

import VirtualTable from "./VirtualTable";

export default function ContentEditing(props) {
  const classes = useStyles();
  const [parsedCSV, setParsedCSV] = useState(null);

  useEffect(() => {
    // dispatch(fetchTable(props.tableName.replace(/[ ]/gi, '_').toLowerCase()))
    const result = readRemoteFile(
      "https://raw.githubusercontent.com/YuanTian1991/crc-igv/master/data/GeneBody5hmCGene.csv",
      {
        header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      delimitersToGuess: [',', '	', '|', '\t'],
        complete: (results) => {
          handleFetchDataSuccess(results.data)
          // setData(results);
        },
      }
    );
  }, []);

  const handleFetchDataSuccess = (tableData) => {
    const tmpColumn = Object.keys(tableData[0]).map((col, colIndex) => {
      return {
        name: col,
        title: col,
        key: col,
        dataKey: col,
        width: 180,
        height: 40,
        resizable: true,
        align: Column.Alignment.CENTER,
        // cellRenderer: ({ cellData, column }) => <EditableCell cellData={cellData} colName={column} />,
        sortable: true,
      };
    });
    setParsedCSV({ tableColumn: tmpColumn, tableRow: tableData });
  };

  return (
    <div className={classes.root}>
      {parsedCSV !== null ? (
        <div>
          <VirtualTable
            tableColumn={parsedCSV.tableColumn}
            tableRow={parsedCSV.tableRow}
            height={"30em"}
            rowKey={props.rowKey}
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
