

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
}
export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments: (state, action) => {
            console.log('action.payload', action.payload)
            state.comments = action.payload;
        },
        removeComments: (state) => {
            state.comments = []
        },
    },
});

export const { setComments, removeComments } = commentsSlice.actions;

export default commentsSlice.reducer;
