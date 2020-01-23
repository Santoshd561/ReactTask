import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Task from "./task";

export default () => {
  return (
    <div>
      <Switch>
        {/* <NavBar /> */}
        <Route path="/homepage" exact component={Homepage} />
        <Route path="/task" exact component={Task} />
      </Switch>
    </div>
  );
};
