import { combineReducers } from "redux";

import speedReducer from "./speedReducer";
import generationReducer from "./generationReducer";

export default combineReducers({
  speed: speedReducer,
  generation: generationReducer,
});
