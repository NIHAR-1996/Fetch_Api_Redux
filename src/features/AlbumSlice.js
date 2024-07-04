import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const albumData = createAsyncThunk("albumData/fetchAlbums", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const result = await response.json();
  return result;
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const AlbumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(albumData.pending, (state) => {
        state.loading = true;
      })
      .addCase(albumData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Data fetched successfully:", action.payload.data);
        state.data = action.payload;
      })
      .addCase(albumData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default AlbumSlice.reducer;
