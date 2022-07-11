import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import complaintsService from './complaintsService';

const initialState = {
  complaints: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Create new complaint
export const createComplaint = createAsyncThunk(
  'complaints/create',
  async (complaintData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await complaintsService.createComplaint(complaintData, token);
    } catch (error) {
      const message =
        (error.response && error.response.message && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user goals
export const getComplaint = createAsyncThunk(
  'complaints/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await complaintsService.getComplaint(token);
    } catch (error) {
      const message =
        (error.response && error.response.message && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete complaint
export const deleteComplaint = createAsyncThunk(
  'complaints/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await complaintsService.deleteComplaint(id, token);
    } catch (error) {
      const message =
        (error.response && error.response.message && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const complaintsSlice = createSlice({
  name: 'complaints',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComplaint.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComplaint.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.complaints.push(action.payload);
      })
      .addCase(createComplaint.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getComplaint.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComplaint.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.complaints = action.payload;
      })
      .addCase(getComplaint.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteComplaint.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComplaint.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.complaints = state.complaints.filter(
          (complaint) => complaint._id !== action.payload.id
        );
      })
      .addCase(deleteComplaint.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = complaintsSlice.actions;
export default complaintsSlice.reducer;
