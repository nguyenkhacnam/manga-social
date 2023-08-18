

import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
    },
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        removeComments: (state) => {
            return []
        },
    },
});

export const { setComments, removeComments } = commentsSlice.actions;

export default commentsSlice.reducer;
