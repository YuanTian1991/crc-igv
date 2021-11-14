// import logo from './logo.svg';
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import HydroEnrich from "./page/HydroEnrich";
import RegionEnrich from "./page/RegionEnrich";

import CompareBetweenMethods from "./page/CompareBetweenMethods";
import Home from "./page/Home";
import Methylation from "./page/Methylation";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HydroEnrich} />
          <Route exact path="/OldResult" component={Home} />
          <Route exact path="/RegionEnrich" component={RegionEnrich} />
          <Route
            exact
            path="/CompareBetweenMethods/:pheno"
            component={CompareBetweenMethods}
          />
          <Route exact path="/methylation" component={Methylation} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
