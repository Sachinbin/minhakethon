import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false
  },
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },

    setLoading: (state) => {
      state.isLoading = true;
    },

    logout: (state) => {
      state.currentUser = null;
    }
  }
});

export const { addUser, setLoading, logout } = userSlice.actions;
export default userSlice.reducer;   