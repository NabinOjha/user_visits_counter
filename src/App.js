import React from "react";
import { useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import OtherComponent from "./OtherComponent";

const App = () => {
  useEffect(() => {
    (async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const visitorId = result.visitorId;
      axios({
        url: `http://localhost:5000/visit/${visitorId}`,
        method: "get",
      });
    })();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route paht="/other_route" component={OtherComponent} />
      </Switch>
    </Router>
  );
};

export default App;
