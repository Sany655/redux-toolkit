import { configureStore } from "@reduxjs/toolkit";
import reduceres from "./reducers";

const store = configureStore({
    reducer:reduceres
})

export default store;