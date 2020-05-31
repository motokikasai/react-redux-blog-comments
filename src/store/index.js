import { createStore } from "redux";
import appReducer from "./app-reducer";

// Pass A Reducer to Store
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
