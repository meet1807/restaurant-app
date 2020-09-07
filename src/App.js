import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Notfound from "./components/common/Notfound";

import "./App.css";
import ItemDetails from "./components/common/ItemDetails";
import Cart from "./components/common/cart";

function App() {
  return (
    <React.Fragment>
      <main className="app">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/itemDetails" component={ItemDetails} />
          <Route path="/not-found" component={Notfound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
