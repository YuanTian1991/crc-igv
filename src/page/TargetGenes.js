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
    // minHeight: "100vh",
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

export default function TargetGenes() {
  const classes = useStyles();
  const [browser, setBrowser] = useState(null);
  const [targetGene, setTargetGene] = useState("BRCA1");

  useEffect(() => {
    var igvContainer = document.getElementById("igv-div");
    var igvOptions = {
      genome: "hg38",
      locus: "BRCA1",
      tracks: [
        {
          name: "NC_5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NC_cliped.bw",
          type: "wig",
          color: "rgb(244, 187, 74, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "TC_5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/TC_cliped.bw",
          type: "wig",
          color: "rgb(8, 146, 165, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "LT_5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_cliped.bw",
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

  useEffect(() => {
    if (browser !== null) {
      browser.search(targetGene);
    }
  }, [targetGene]);

  const handleChangeIGV = (gene) => {
    console.log(gene);
    setTargetGene(gene);
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
              Target Genes for Experiment
            </Typography>
            <Typography variant="body2" gutterBottom style={{ padding: "5px" }}>
              These are genes identified for liver metastasis, contains columns
              like if a gene is LT uniqually exist (in promoter or genebody), if
              a gene show differential signal between TC and LT (there is not
              much but still some). Importantly this table also show if a gene
              have <b>differential methylation</b> or{" "}
              <b>gene expression difference</b> between TC and LT.
            </Typography>
            <Tables
              selectGene={(gene) => handleChangeIGV(gene)}
              geneList={"TargetGeneTable.csv"}
            />
          </Grid>

          <Grid item xs={6}>
            <div id="igv-div" className={classes.igvStyle}></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
