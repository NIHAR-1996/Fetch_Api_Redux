import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "../features/ApiSlice";
import TodoSlice from "../features/TodoSlice";
import AlbumSlice from "../features/AlbumSlice";

export const Store = configureStore({
  reducer: {
    Apidata: ApiSlice,
    Todo:TodoSlice,
    Album:AlbumSlice
  },
});