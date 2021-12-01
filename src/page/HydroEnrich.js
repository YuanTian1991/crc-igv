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
    {
      title: "Promoter 5hmC Enrichment",
      file: "promoterTable.csv",
      buttonName: "5hmC Promoter",
    },
    {
      title: "GeneBody 5hmC Enrichment",
      file: "genebodyTable.csv",
      buttonName: "5hmC GeneBody",
    },
    {
      title: "Promoter 5hmC Unique Enrichment",
      file: "UniquePromoterTable.csv",
      buttonName: "5hmC Unique Promoters",
    },
    {
      title: "GeneBody 5hmC Unique Enrichment",
      file: "UniqueGeneBodyTable.csv",
      buttonName: "5hmC Unique GeneBodys",
    },
  ];

  useEffect(() => {
    var igvContainer = document.getElementById("igv-div");
    var igvOptions = {
      genome: "hg38",
      locus: "BRCA1",
      tracks: [
        {
          name: "NC 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NC_cliped.bw",
          type: "wig",
          color: "rgb(244, 187, 74, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "TC 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/TC_cliped.bw",
          type: "wig",
          color: "rgb(8, 146, 165, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "LT 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_cliped.bw",
          type: "wig",
          color: "rgb(48, 71, 94, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "NL 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NL_cliped.bw",
          type: "wig",
          color: "rgb(232, 72, 85, 0.4)",
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
          name: "NC 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NC_sig_cliped.bw",
          type: "wig",
          color: "rgb(244, 187, 74, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "TC 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/TC_sig_cliped.bw",
          type: "wig",
          color: "rgb(8, 146, 165, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "LT 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/LT_sig_cliped.bw",
          color: "rgb(48, 71, 94, 0.4)",
          autoscaleGroup: 1,
          min: "0",
        },
        {
          name: "NL 5hmC",
          url: "https://s3.eu-central-1.wasabisys.com/crc-bath/5hmCMergedBW/NL_sig_cliped.bw",
          type: "wig",
          color: "rgb(232, 72, 85, 0.4)",
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
              5hmC enrichment on Genes
            </Typography>

            <Typography variant="body2" gutterBottom style={{ padding: "5px" }}>
              This is results of bin-enrich methods for 5hmC across 4
              phenotypes. There are 4 tables:
            </Typography>

            <Typography variant="body2" gutterBottom style={{ padding: "5px" }}>
              1. 5hmC enrichment status for gene promoters. 2. 5hmC enrichment
              status for genebody. these two tables, "PhenoSig" column indicates
              if this promoter/genebody is significant enriched by corresponding
              pheno's 5hmC signals. Note that one promoter may have multiple
              phenotypes significance.
            </Typography>

            <Typography variant="body2" gutterBottom style={{ padding: "5px" }}>
              3. Unique 5hmC Genes in each phenotypes. 4. Unique 5hmC Genes in
              each phenotypes. This "unique" status is calculated by 2 rules:
              first a gene must be significant in certain phenotype, and second,
              the 5hmC mean value in corresponding phenotype must be at least
              0.2 higher than other phenotye.{" "}
              <b>Note that, here NL is not included.</b>
            </Typography>

            <div style={{ marginBottom: "10px", marginTop: "20px" }}>
              {geneList.map((g, index) => {
                return (
                  <Link
                    color="inherit"
                    noWrap
                    variant="body2"
                    className={classes.toolbarLink}
                    onClick={() => handleChangeGeneList(index)}
                  >
                    {g.buttonName}
                  </Link>
                );
              })}
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
