import React, { useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  input: {
    fontSize: "13px",
  },
}));

const NormalCell = (props) => {
  const classes = useStyles();

  useEffect(() => {}, [props]);

  if (props.cellData === true) {
    return (
      <>
        <CheckIcon style={{ color: "green" }} />
      </>
    );
  } else if (props.cellData === false) {
    return <span></span>;
  } else {
    return <span>{props.cellData}</span>;
  }
};

export default NormalCell;
