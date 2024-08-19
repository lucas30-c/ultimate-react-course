import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import store from "./store";

store.dispatch({ type: "account/deposit", payload: 8800 });
store.dispatch({
  type: "customer/createCustomer",
  payload: {
    fullName: "Finn",
    nationalID: "1234567890",
    createdAt: new Date().toISOString(),
  },
});
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
