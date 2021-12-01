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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

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
}));

export default function CompareBetweenMethods(props) {
  const classes = useStyles();
  let history = useHistory();

  const [browser, setBrowser] = useState(null);
  const [browser500, setBrowser500] = useState(null);
  const [targetGene, setTargetGene] = useState("BRCA1");
  const [glIndex, setGLIndex] = useState(0);

  const phenoColor = {
    NC: "rgb(244, 187, 74, 0.4)",
    TC: "rgb(8, 146, 165, 0.4)",
    LT: "rgb(48, 71, 94, 0.4)",
    NL: "rgb(232, 72, 85, 0.4)",
  };

  const [pheno, setPheno] = useState("NC");
  const [geneFeature, setGeneFeature] = useState("promoter");

  const geneList = [
    { title: "Promoter 5hmC Enrichment", file: "LT_promoter_CompareTable.csv" },
    { title: "GeneBody 5hmC Enrichment", file: "genebodyTable.csv" },
  ];

  useEffect(() => {
    setPheno(props.match.params.pheno);

    var igvContainer = document.getElementById("igv-div");
    var igvOptions = {
      genome: "hg38",
      locus: "BRCA1",
      tracks: [
        {
          name: props.match.params.pheno + " 5hmC",
          url:
            "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/" +
            props.match.params.pheno +
            "_cliped.bw",
          type: "wig",
          color: phenoColor[props.match.params.pheno],
          // autoscaleGroup: 1,
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
          name: props.match.params.pheno + " 5hmC",
          url:
            "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/" +
            props.match.params.pheno +
            "_SigPeaks_cliped.bw",
          type: "wig",
          color: phenoColor[props.match.params.pheno],
          // autoscaleGroup: 1,
          min: "0",
        },
      ],
    };
    igv
      .createBrowser(igvContainer_500, igvOptions_500)
      .then(function (browser) {
        setBrowser500(browser);
      });
  }, [props.match.params.pheno]);

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

  const handleGeneFeatureChange = (event) => {
    setGeneFeature(event.target.value);
  };

  const handleChangePheno = (event) => {
    // history.push("/CompareBetweenMethods/" + event.target.value);
    window.location.href =
      "https://yuantian1991.github.io/crc-igv/#/CompareBetweenMethods/" +
      event.target.value;
    window.location.reload();
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
              Compare Between bin-enrich method and troditional peak calling
            </Typography>
            <Typography variant="body2" gutterBottom style={{ padding: "5px" }}>
              This webpage shows that bin-enrich method can: 1, identify genes
              promoters/genebodys that hard to be peak-overlapped by troditional
              peak calling ways. 2, reject promoter/genebodys troditional peak
              calling method would get. You can select different phenotypes and
              promoter/genebody to check the results.
            </Typography>

            <div style={{ marginBottom: "10px" }}>
              <FormControl style={{ minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Phenotype</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pheno}
                  onChange={handleChangePheno}
                >
                  <MenuItem value={"NC"}>Normal Colon (NC)</MenuItem>
                  <MenuItem value={"TC"}>Tumour Colon (TC)</MenuItem>
                  <MenuItem value={"LT"}>Liver Tumour (LT)</MenuItem>
                  <MenuItem value={"NL"}>Normal Liver (NL)</MenuItem>
                </Select>
              </FormControl>

              <FormControl style={{ minWidth: 200, marginLeft: "20px" }}>
                <InputLabel id="demo-simple-select-label">Phenotype</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={geneFeature}
                  onChange={handleGeneFeatureChange}
                >
                  <MenuItem value={"promoter"}>promoter</MenuItem>
                  <MenuItem value={"genebody"}>genebody</MenuItem>
                </Select>
              </FormControl>

              <Typography style={{ marginBottom: "10px", marginTop: "10px" }}>
                {pheno + " " + geneFeature + " 5hmC enrichment"}
              </Typography>
            </div>

            <Tables
              selectGene={(gene) => handleChangeIGV(gene)}
              geneList={pheno + "_" + geneFeature + "_CompareTable.csv"}
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
