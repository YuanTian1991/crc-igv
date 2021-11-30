// import logo from './logo.svg';
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./page/Layout";

import HydroEnrich from "./page/HydroEnrich";
import RegionEnrich from "./page/RegionEnrich";

import CompareBetweenMethods from "./page/CompareBetweenMethods";
import Home from "./page/Home";
import TargetGenes from "./page/TargetGenes";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={HydroEnrich} />
            <Route exact path="/OldResult" component={Home} />
            <Route exact path="/RegionEnrich" component={RegionEnrich} />
            <Route
              exact
              path="/CompareBetweenMethods/:pheno"
              component={CompareBetweenMethods}
            />
            <Route exact path="/TargetGenes" component={TargetGenes} />
          </Switch>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
