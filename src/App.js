import React from "react";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <div>
      <Router>
        <TopNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/adduser" component={AddUser} exact />
          <Route path="/:id" component={EditUser} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
