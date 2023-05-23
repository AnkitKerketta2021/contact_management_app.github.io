import { configureStore } from "@reduxjs/toolkit";
import ReducerSlice from "./components/ReducerSlice";

export const store = configureStore({
  reducer: {
    contact: ReducerSlice,
  },
});
