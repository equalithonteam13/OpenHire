import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Drizzle } from "drizzle";
import { DrizzleContext } from "drizzle-react";
import "./App.css";
import Migrations from "./contracts/Migrations.json";
import OpenHire from "./contracts/OpenHire";
import store from "./middleware";
import { BrowserRouter } from "react-router-dom";

const options = { contracts: [Migrations, OpenHire] };
const drizzle = new Drizzle(options, store);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DrizzleContext.Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
