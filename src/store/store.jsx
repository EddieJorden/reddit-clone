import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../components/searchbar/searchBarSlice';
import redditSlice from '../components/reddit/RedditSlice';

export const store = configureStore({

	reducer: {
		searchBar: searchBarReducer,
		reddit: redditSlice
	}
});
