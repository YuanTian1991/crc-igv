// import logo from './logo.svg';
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./page/Home";
import Methylation from "./page/Methylation";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/methylation" component={Methylation} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
