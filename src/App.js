import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
const HomePage = lazy(() => import("./components/Home"));

function App() {
  return (
    <div className="App">
      <section>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            <Switch>
              <Route
                path="/programs"
                render={(props) => <HomePage {...props} />}
              />
              <Redirect from="/" to="/programs" />
            </Switch>
          </Suspense>
        </Router>
      </section>
    </div>
  );
}

export default App;