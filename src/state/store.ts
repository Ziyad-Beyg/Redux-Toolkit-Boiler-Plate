import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
