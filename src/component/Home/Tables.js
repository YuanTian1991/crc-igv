import React, { useState, useEffect } from "react";

import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  InputBase,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";

import { readString, readRemoteFile } from "react-papaparse";
import { Column } from "react-base-table";

import SearchIcon from "@material-ui/icons/Search";

import GeneCell from "./GeneCell";
import NormalCell from "./NormalCell";
import VirtualTable from "./VirtualTable";

export default function Tables(props) {
  const classes = useStyles();
  const [parsedCSV, setParsedCSV] = useState(null);
  const [globalInput, setGlobalInput] = useState("");

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
      let cellRenderer = ({ cellData }) => <NormalCell cellData={cellData} />;
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
        sortable: true,
      };
    });
    setParsedCSV({ tableColumn: tmpColumn, tableRow: tableData });
  };

  const handleSelectGene = (gene) => {
    let coordinate = gene.chr + ":" + gene.start + "-" + gene.end;
    props.selectGene({ coordinate: coordinate, symbol: gene.geneSymbol });
  };

  const onGlobalSearch = (globalInput, rows) => {
    const tmpRow = [...rows];
    const attribtues = parsedCSV.tableColumn.map((x) => x.dataKey);

    const newData = tmpRow.filter((row) => {
      let attributeFilter = attribtues.filter((x) => {
        if (
          row[x] !== null &&
          row[x] !== undefined &&
          !Number.isNaN(row[x]) &&
          typeof row[x] !== "boolean"
        ) {
          return row[x]
            .toString()
            .toLowerCase()
            .includes(globalInput.toLowerCase());
        } else {
          return false;
        }
      });
      if (attributeFilter.length >= 1) {
        return true;
      } else {
        return false;
      }
    });
    // setBaseTableRow(newData);
    return newData;
  };

  return (
    <div className={classes.root}>
      <div style={{ height: "50px" }}>
        <div
          style={{
            float: "right",
            position: "relative",
            marginRight: "10px",
          }}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={globalInput}
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setGlobalInput(e.target.value)}
            />

            {/* <b
              style={{
                fontSize: "1em",
                fontWeight: "400",
                // color: "#E91E63",
                marginLeft: "10px",
              }}
            >
              <CountUp
                end={onGlobalSearch(globalInput, onColumnSort(sortBy)).length}
              />{" "}
              rows
            </b> */}
          </div>
        </div>
      </div>

      {parsedCSV !== null ? (
        <div style={{ border: "1px solid #eeeeee" }}>
          <VirtualTable
            tableColumn={parsedCSV.tableColumn}
            tableRow={onGlobalSearch(globalInput, parsedCSV.tableRow)}
            height={"65vh"}
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
  search: {
    position: "relative",
    zIndex: 98,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 0),
    fontWeight: "900",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    border: "1px solid lightgrey",
    borderRadius: "3px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
