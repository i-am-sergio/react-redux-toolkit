import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/TaskSlice";

export const store = configureStore({// similar a useState
  reducer: {
    tasks: taskReducer
  }

});
