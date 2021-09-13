// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./page/Home";
import Methylation from "./page/Methylation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/methylation" component={Methylation} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
