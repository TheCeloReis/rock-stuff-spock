import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import CreateGamePage from "./pages/CreateGame";
import HomePage from "./pages/Home";
import LoadingPage from "./pages/Loading";
import LogInPage from "./pages/LogIn";

function App() {
  const { loading, user } = useSelector((state) => state.auth);

  if (loading !== false) {
    return <LoadingPage />;
  }

  if (!user) {
    return <LogInPage />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/create">
        <CreateGamePage />
      </Route>
    </Switch>
  );
}

export default App;
