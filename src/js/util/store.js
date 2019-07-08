import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import ListingReducer from "../reducers/listingReducer";

const store = createStore(
  combineReducers({ ListingReducer }),
  {},
  applyMiddleware(createLogger(), thunk)
);

store.subscribe(() => {
  console.log("Store Updated ", store.getState());
});

export default store;
