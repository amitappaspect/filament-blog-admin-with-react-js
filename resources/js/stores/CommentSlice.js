import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from './../constants'


const CommentSlice = createSlice({
    name: 'CommentSlice',
    initialState: {
        comments: {}
    },
    reducers: {
        setComments: (state, { payload }) => {
            state.comments = payload
        },
    },
})

export const { setComments } = CommentSlice.actions;
export const storeAllComments = state => state.CommentSlice.comments
export default CommentSlice.reducer

export function AddComment(params) {
    return async dispatch => {
        try {
            return await axios.post(config.API_APP_URL + config.API_FETCH_ADD_COMMENT, params)
                .then(({ data }) => {
                    dispatch(getComments(params.post_id));
                    return data;
                })
                .catch(function (error) {
                    return error;
                });
        } catch (error) {
            return error;
        }
    }
}

export function getComments(post_id, page = 1) {
    return async dispatch => {
        try {
            return await axios.get(config.API_APP_URL + config.API_FETCH_GET_COMMENTS_BY_POST_ID + '?post_id=' + post_id + '&page=' + page)
                .then(({ data }) => {
                    dispatch(setComments(data));
                    return data;
                })
                .catch(function (error) {
                    return error;
                });
        } catch (error) {
            return error;
        }
    }
}