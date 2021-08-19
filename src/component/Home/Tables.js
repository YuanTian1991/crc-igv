import React, { useState, useEffect } from 'react';

import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import { readString, readRemoteFile } from 'react-papaparse'
import { Column } from 'react-base-table';

import VirtualTable from './VirtualTable'


export default function ContentEditing(props) {
  const classes = useStyles();
  const [parsedCSV, setParsedCSV] = useState(null)

  useEffect(() => {
    // dispatch(fetchTable(props.tableName.replace(/[ ]/gi, '_').toLowerCase()))
    const result = readRemoteFile("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4ea4afd2-11f6-4dcf-be38-cdbb5665f12d/GeneBody5hmCGene.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210819T190504Z&X-Amz-Expires=86400&X-Amz-Signature=349b4ed8e0bcf3d1031321c2ff33376c5440ed24d0823dd21a8f14bce3ef8702&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22GeneBody5hmCGene.csv%22", {
      download: true,
      // rest of config ...
    })
    console.log(result)
  }, [])

  const handleFetchDataSuccess = (tableData) => {

    const tmpColumn = Object.keys(tableData[0]).map((col, colIndex) => {
      return (
        {
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
        }
      )
    })
    setParsedCSV({ tableColumn: tmpColumn, tableRow: tableData })
  }

  return (
    <div className={classes.root}>

      {
        parsedCSV !== null ? (
          <div>
            <VirtualTable tableColumn={parsedCSV.tableColumn} tableRow={parsedCSV.tableRow} height={"30em"} rowKey={props.rowKey} />
          </div>
        ) : (
          <Typography variant="body2" className="mb-4" gutterBottom style={{ color: 'hsla(0,0%,0%,0.6)' }}>
           No data loaded
          </Typography>
        )
      }
    </div >
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));