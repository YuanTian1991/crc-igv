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

export default function CompareBetweenMethods(props) {
  const classes = useStyles();
  const [browser, setBrowser] = useState(null);
  const [browser500, setBrowser500] = useState(null);
  const [targetGene, setTargetGene] = useState("BRCA1");
  const [glIndex, setGLIndex] = useState(0);

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
          name: "LT",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_cliped.bw",
          type: "wig",
          color: "rgb(48, 71, 94, 0.4)",
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
          name: "LT",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_SigPeaks_cliped.bw",
          type: "wig",
          color: "rgb(48, 71, 94, 0.4)",
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
  }, []);

  const handleChangeIGV = (gene) => {
    console.log(gene);
    setTargetGene(gene);
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

  const handleGeneFeatureChange = (event) => {
    setGeneFeature(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <div style={{ marginBottom: "10px" }}>
              <FormControl style={{ minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Phenotype</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pheno}
                  // onChange={handleChange}
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

              {/* <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ margin: "5px" }}
                onClick={() => handleChangeGeneList(0)}
              >
                Promoter
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ margin: "5px" }}
                onClick={() => handleChangeGeneList(1)}
              >
                GeneBody
              </Button> */}
              <Typography style={{ marginBottom: "10px", marginTop: "10px" }}>
                {geneList[glIndex].title}
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

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">CRC Project IGV App</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
