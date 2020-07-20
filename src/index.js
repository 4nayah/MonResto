import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

import App from "./App";

const config = {
  apiKey: "AIzaSyAXgza0-bTFa-nFYF7e-HbnHYZl2J6zHGc",
  authDomain: "test-5a2dd.firebaseapp.com",
  databaseURL: "https://test-5a2dd.firebaseio.com",
  projectId: "test-5a2dd",
  storageBucket: "test-5a2dd.appspot.com",
  messagingSenderId: "1057855487683",
  appId: "1:1057855487683:web:7f8a0fe0f57bcbcedfac76"
};

firebase.initializeApp(config);
const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
