import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import httpClient from '../httpClient'

const initialState = {
  isFetching: false,
  data: null,
  error: null
}

export const getUser = createAsyncThunk(
  'user/getUser',
  async (id, { rejectWithValue }) => {
    const {
      data: { data }
    } = await httpClient.get(`users/${id}`)
    return data
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ( args, { rejectWithValue }) => {
    const {id, name } = args;
    const {
      data 
    } = await httpClient.patch(`users/${id}`, {name})
    console.log("Data after sending: ", data);
    return data;
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.isFetching = true
      state.data = null
      state.error = null
    },
    [getUser.fulfilled]: (state, action) => {
      const { first_name: name, avatar } = action.payload
      state.isFetching = false
      state.data = { name, avatar }
      state.error = null
    },
    [getUser.rejected]: (state, action) => {
      state.isFetching = false
      state.data = null
      state.error = action.payload
    },
    //Update queries
    [updateUser.pending] : (state, action) => {
        state.isFetching = true;
    },
    [updateUser.fulfilled]: (state, action) => {
        console.log("update action: ", action);
        const { name } = action.payload;
        state.isFetching = false;
        state.data.name = name;
    },
    [updateUser.rejected]: (state, action) => {
        state.isFetching  = false;
        state.error = action.payload;
    }
  }
})

export default userSlice.reducer
