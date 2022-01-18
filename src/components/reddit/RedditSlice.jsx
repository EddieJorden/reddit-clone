import { createSlice } from '@reduxjs/toolkit';

const redditSlice = createSlice({
  name: 'redditSlice',
  initialState: {
    redditReturn: []
  },
  reducers: {
    updateRedditReturn(state, action) {
        state.redditReturn = action.payload;
        console.log('reddit response', action.payload);
    }
  }
});

export const selectRedditReturn = state => state.reddit.redditReturn;
export const { updateRedditReturn } = redditSlice.actions;
export default redditSlice.reducer;