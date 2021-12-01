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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
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
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    cursor: "pointer",
    margin: "5px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [browser, setBrowser] = useState(null);
  const [browser500, setBrowser500] = useState(null);
  const [targetGene, setTargetGene] = useState("BRCA1");
  const [glIndex, setGLIndex] = useState(0);

  const geneList = [
    { title: "5hmC Significantly Enriched Regions", file: "Region5hmC.csv" },
    { title: "5mC Significantly Enriched Regions", file: "RegionMeth.csv" },
  ];

  useEffect(() => {
    var igvContainer = document.getElementById("igv-div");
    var igvOptions = {
      genome: "hg38",
      locus: "BRCA1",
      tracks: [
        {
          name: "NC 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NC_SigPeaks_cliped.bw",
          type: "wig",
          color: "rgb(244, 187, 74, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "TC 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/TC_SigPeaks_cliped.bw",
          type: "wig",
          color: "rgb(8, 146, 165, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "LT 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_SigPeaks_cliped.bw",
          type: "wig",
          color: "rgb(48, 71, 94, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
      ],
    };

    igv.createBrowser(igvContainer, igvOptions).then(function (browser) {
      setBrowser(browser);
    });

    var igvContainer_500 = document.getElementById("igv-div_500");
    var igvOptions_500 = {
      genome: "hg38",
      locus: "BRCA1",
      tracks: [
        {
          name: "NC 5mC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/MethMergedBW/NC_MethSigPeaks_cliped.bw",
          type: "wig",
          color: "rgb(244, 187, 74, 0.8)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "TC 5mC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/MethMergedBW/TC_MethSigPeaks_cliped.bw",
          type: "wig",
          color: "rgb(8, 146, 165, 0.8)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "LT 5mC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/MethMergedBW/LT_MethSigPeaks_cliped.bw",
          color: "rgb(48, 71, 94, 0.8)",
          autoscaleGroup: 1,
          min: "0",
        },
      ],
    };
    igv
      .createBrowser(igvContainer_500, igvOptions_500)
      .then(function (browser) {
        setBrowser500(browser);
      });
  }, []);

  const handleChangeIGV = (gene) => {
    console.log(gene);
    setTargetGene(gene.coordinate);
  };

  useEffect(() => {
    if (browser !== null) {
      browser.search(targetGene);
    }

    if (browser500 !== null) {
      browser500.search(targetGene);
    }
  }, [targetGene]);

  const handleChangeGeneList = (index) => {
    setGLIndex(index);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Region Enrichment between 5hmC and 5mC
            </Typography>
            <Typography variant="body2" gutterBottom style={{ padding: "5px" }}>
              These are result from troditional peak mapping methods (MACS2
              calling). It will calculate "regions" across genome that have
              5hmC/5mC enriched. The resolute of regions are not high, so I
              invented bin-enriched solution for target-gene discovery. However,
              these regions can still be used for transcript factor enrichment.
            </Typography>
            <div style={{ marginBottom: "10px" }}>
              <Link
                color="inherit"
                noWrap
                variant="body2"
                className={classes.toolbarLink}
                onClick={() => handleChangeGeneList(0)}
              >
                5hmC Regions (Peaks)
              </Link>

              <Link
                color="inherit"
                noWrap
                variant="body2"
                className={classes.toolbarLink}
                onClick={() => handleChangeGeneList(1)}
              >
                5mC Regions (Peaks)
              </Link>

              {/* <Typography style={{ marginBottom: "10px", marginTop: "10px" }}>
                {geneList[glIndex].title}
              </Typography> */}
            </div>

            <Tables
              selectGene={(gene) => handleChangeIGV(gene)}
              geneList={geneList[glIndex].file}
            />
          </Grid>
          <Grid item xs={6}>
            <div id="igv-div" className={classes.igvStyle}></div>

            <div id="igv-div_500" className={classes.igvStyle}></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
