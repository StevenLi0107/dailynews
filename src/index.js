import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./appRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

import { Provider } from "react-redux";
import ReduxStore from "./store";

ReactDOM.render(
  <Provider store={ReduxStore()}>
    <AppRoutes />
  </Provider>,
  document.getElementById("root")
);
