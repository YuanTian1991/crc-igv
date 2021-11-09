import React, { useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    fontSize: "13px",
  },
}));

const GeneCell = (props) => {
  const classes = useStyles();

  useEffect(() => {}, [props]);

  return (
    <span>
      <Button
        size="small"
        color="primary"
        onClick={() => props.selectGene(props.rowData)}
      >
        {props.cellData}
      </Button>
      {/* <InputBase
        className={classes.input}
        value={props.cellData}
        inputProps={{ 'aria-label': 'naked' }}
      /> */}
    </span>
  );
};

export default GeneCell;
