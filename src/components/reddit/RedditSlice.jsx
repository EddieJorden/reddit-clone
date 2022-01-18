import { createSlice } from '@reduxjs/toolkit';

const redditSlice = createSlice({
  name: 'redditSlice',
  initialState: {
    redditReturn: null
  },
  reducers: {
    updateRedditReturn(state, action) {
        state.redditReturn = action.payload.data.children;
        console.log('reddit response', action.payload.data.children);
    }
  }
});

export const selectRedditReturn = state => state.reddit.redditReturn;
export const { updateRedditReturn } = redditSlice.actions;
export default redditSlice.reducer;