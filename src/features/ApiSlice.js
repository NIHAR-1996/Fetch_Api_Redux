import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("Apidata/getData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return result;
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

 const ApiSlice = createSlice({
  name: "Apidata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        // console.log('Fetching data...');
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        // console.log('Data fetched successfully:', action.payload);
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        // console.log('Failed to fetch data:', action.error.message);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ApiSlice.reducer;