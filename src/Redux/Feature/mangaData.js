import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action thực hiện gọi API để tạo sản phẩm mới
export const getMangaData = createAsyncThunk(
  "mangaData/getMangaData",
  async () => {
    try {
      const response = await axios.get("http://14.225.7.221:7979/");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  mangaData: [],
  loading: false,
  error: null,
};

const mangaDataSlice = createSlice({
  name: "mangaData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMangaData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMangaData.fulfilled, (state, action) => {
      state.loading = false;
      state.mangaData = action.payload;
    });
    builder.addCase(getMangaData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default mangaDataSlice.reducer;
