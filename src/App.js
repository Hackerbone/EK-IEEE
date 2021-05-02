import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Suicide from 'pages/components/Suicide';
import Dementia from 'pages/components/Dementia';
import PsyFirstAid from 'pages/components/PsyFirstAid';
import Winter from 'pages/components/Winter';
import Communication from 'pages/components/Communication';


import Home from "pages/home/home";
import Navigation from "components/Navigation/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "misc/_common.scss";
import Auth from "pages/auth/auth";
import Dashboard from "pages/dashboard/dashboard";
import Room from "pages/room/room";
import { createBrowserHistory } from "history";
import Layout from "./pages/Layout/Layout";

function App() {
  const [logged, setLogged] = useState(0);
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navigation logged={logged} setLogged={setLogged} />

      {!logged ? (
        <Switch>
          <Route exact path="/volunteer-info">
            <Layout />
          </Route>
          <Route exact path="/volunteer-info/1">
            <Dementia />
          </Route>
          <Route exact path="/volunteer-info/2">
            <Suicide />
          </Route>
          <Route exact path="/volunteer-info/3">
            <PsyFirstAid />
          </Route>
          <Route exact path="/volunteer-info/4">
            <Communication />
          </Route>
          <Route exact path="/volunteer-info/5">
            <Winter />
          </Route>

          <Route
            exact
            path="/room/:id"
            render={(props) => {
              return <Room {...props} />;
            }}
          />

          <Route exact path="/volunteer">
            <Auth logged={logged} setLogged={setLogged} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/volunteer-info">
            <Layout />
          </Route>
          <Route exact path="/volunteer-info/1">
            <Dementia />
          </Route>
          <Route exact path="/volunteer-info/2">
            <Suicide />
          </Route>
          <Route exact path="/volunteer-info/3">
            <PsyFirstAid />
          </Route>
          <Route exact path="/volunteer-info/4">
            <Communication />
          </Route>
          <Route exact path="/volunteer-info/5">
            <Winter />
          </Route>

          <Route
            exact
            path="/room/:id"
            render={(props) => {
              return <Room {...props} />;
            }}
          />

          <Route
            path="/dashboard"
            exact
            component={() => <Dashboard setLogged={setLogged} />}
          />
          <Route exact path="/volunteer-info" component={Layout} />
          <Route path="/" render={() => <Redirect to="/dashboard" />} />
        </Switch>
      )}
    </Router>
  );
}

export default App;
