import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodoData = createAsyncThunk("TodoData/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await response.json();
  console.log("Fetched data:", result); // Log fetched data
  return result;
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const TodoSlice = createSlice({
  name: "TodoData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodoData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTodoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default TodoSlice.reducer;