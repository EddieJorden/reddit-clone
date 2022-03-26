import { createSlice } from '@reduxjs/toolkit';

const redditSlice = createSlice({
  name: 'redditSlice',
  initialState: {
    redditReturn: [],
    userSearchTerm: "ferrari",
    
  },
  reducers: {
    updateRedditReturn(state, action) {
        state.redditReturn = action.payload;
    },
    updateSearchTerm(state, action) {
      state.userSearchTerm = action.payload;
    }
  }
});

export const selectRedditReturn = state => state.reddit.redditReturn;
export const selectUserSearchTerm = state => state.reddit.userSearchTerm;
export const { updateRedditReturn, updateSearchTerm } = redditSlice.actions;
export default redditSlice.reducer;
