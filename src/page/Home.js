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

import Tables from "../component/Home/Tables"

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
    padding: theme.spacing(3, 2),
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
  const [browser, setBrowser] = useState(null)
  const [targetGene, setTargetGene] = useState("BRCA1")

  useEffect(() => {
    var igvContainer = document.getElementById("igv-div");
    var igvOptions = { 
      genome: "hg38", 
      locus: "BRCA1",
      tracks: [
        {
            "name": "NC",
            "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/283c9d5e-eb5b-4a79-a95a-85d8dfd9d032/NC.bw?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210819T175900Z&X-Amz-Expires=86400&X-Amz-Signature=b4318bd94dd16b4b806c142f811c78e39c3a50f072d1fc7bea8968e27569f314&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22NC.bw%22",
            type: "wig",
            "color": 'rgb(244, 187, 74, 0.4)',
            autoscaleGroup: 1,
            min: "0"
        },
        {
          "name": "TC",
          "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fceb80fe-e19c-40e1-8ce9-978ba86c0e1b/TC.bw?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210819T180353Z&X-Amz-Expires=86400&X-Amz-Signature=9cf7d59cae1cd69d3ce86923879bea6f918dc8f14fe14d8009729bee0ad151eb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22TC.bw%22",
          type: "wig",
          "color": 'rgb(8, 146, 165, 0.4)',
          autoscaleGroup: 1,
          min: "0"
      },
      {
        "name": "LT",
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/931602fe-3335-4ab9-b5b5-f38e53a89f6f/LT.bw?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210819T180401Z&X-Amz-Expires=86400&X-Amz-Signature=7ccdffa3608003be3a79687171d7ef88e1791be0c12b84ac80324842aa75bfd5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22LT.bw%22",
        type: "wig",
        "color": 'rgb(48, 71, 94, 0.4)',
        autoscaleGroup: 1,
        min: "0"
    }
    ]
    };
    return igv.createBrowser(igvContainer, igvOptions).then(function (browser) {
      setBrowser(browser)
  })
  }, []);

  const handleChangeIGV = (gene) => {
    console.log(gene)
    setTargetGene(gene)
  }

  useEffect(() => {
    if(browser !== null) {
      browser.search(targetGene)
    }
  }, [targetGene])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div style={{marginBottom: '10px'}}>
              <Button size="small" variant="contained" color="primary" style={{margin: "5px"}}>Promoter</Button>
              <Button size="small" variant="contained" color="primary" style={{margin: "5px"}}>GeneBody</Button>
              </div>
            <Tables selectGene={(gene) => handleChangeIGV(gene)} />
          </Grid>
          <Grid item xs={6}>
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
