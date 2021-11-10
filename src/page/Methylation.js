import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  CssBaseline,
  Typography,
  Link,
  Paper,
  Button,
} from "@material-ui/core";

import Tables from "../component/Home/Tables";

import igv from "igv";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Adele Lab
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  igvStyle: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    margin: "8px",
    border: "1px solid lightgray",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [browser, setBrowser] = useState(null);

  useEffect(() => {
    var igvContainer = document.getElementById("igv-div");
    var igvOptions = {
      genome: "hg38",
      locus: "BRCA1",
      tracks: [
        {
          name: "NC_5hmC",
          url: "https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/NC_smallbin.bw",
          type: "wig",
          color: "rgb(244, 187, 74, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "TC_5hmC",
          url: "https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/TC_smallbin.bw",
          type: "wig",
          color: "rgb(8, 146, 165, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "LT_5hmC",
          url: "https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/LT_smallbin.bw",
          type: "wig",
          color: "rgb(48, 71, 94, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "NC_Meth",
          url: "https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/NC_MBDseq.bw",
          type: "wig",
          color: "rgb(244, 187, 74)",
          autoscaleGroup: 2,
          min: "0",
        },
        {
          name: "TC_Meth",
          url: "https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/TC_MBDseq.bw",
          type: "wig",
          color: "rgb(8, 146, 165)",
          autoscaleGroup: 2,
          min: "0",
        },
        {
          name: "LT_Meth",
          url: "https://crc-igv.s3.eu-west-2.amazonaws.com/BigWig/LT_MBDseq.bw",
          type: "wig",
          color: "rgb(48, 71, 94)",
          autoscaleGroup: 2,
          min: "0",
        },
      ],
    };

    igv.createBrowser(igvContainer, igvOptions).then(function (browser) {
      setBrowser(browser);
    });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div id="igv-div" className={classes.igvStyle}></div>
          </Grid>
        </Grid>
      </Container>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">CRC Project IGV App</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}