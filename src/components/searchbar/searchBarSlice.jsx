import { createSlice } from '@reduxjs/toolkit';

const searchBarReducer = createSlice({
  name: 'searchBarReducer',
  initialState: {
    userInput: ""
  },
  reducers: {
    updateUserInput(state, action) {
      state.userInput = action.payload;
      console.log('userInput:', action.payload);
    }
  }
});

export const selectUserInput = state => state.searchBar.userInput;
export const { updateUserInput } = searchBarReducer.actions;
export default searchBarReducer.reducer;