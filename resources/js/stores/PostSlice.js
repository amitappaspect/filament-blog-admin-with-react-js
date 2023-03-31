import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from './../constants'


const PostSlice = createSlice({
    name: 'PostSlice',
    initialState: {
        posts: [],
        posts_by_category: [],
        featured_posts: [],
        recent_posts: [],
        post: {},
    },
    reducers: {
        setPost: (state, { payload }) => {
            state.posts = payload
        },
        setSinglePost: (state, { payload }) => {
            console.log('payload', payload);
            state.post = payload
        },
        setFeaturedPost: (state, { payload }) => {
            state.featured_posts = payload
        },
        setRecentPost: (state, { payload }) => {
            state.recent_posts = payload
        },
        setPostByCategory: (state, { payload }) => {
            state.posts_by_category = payload
        },
    },
})

export const { setPost, setFeaturedPost, setRecentPost, setPostByCategory, setSinglePost } = PostSlice.actions
export const storeAllPosts = state => state.PostSlice.posts;
export const storeFeaturedPosts = state => state.PostSlice.featured_posts;
export const storeRecentPosts = state => state.PostSlice.recent_posts;
export const storePostByCategory = state => state.PostSlice.posts_by_category;
export const storeSinglePost = state => state.PostSlice.post;
export default PostSlice.reducer

export function FetchAllPosts(page = 1) {
    return async dispatch => {
        try {
            return await axios.get(config.API_APP_URL + config.API_FETCH_ALL_POSTS + '?page=' + page)
                .then(({ data }) => {
                    dispatch(setPost(data))
                    return data;
                })
                .catch(function (error) {
                    console.log('Error 1 ', error);
                });
        } catch (error) {
            console.log('Error 2 ', error);
        }
    }
}

export function FetchFeaturedPosts() {
    return async dispatch => {
        try {
            return await axios.get(config.API_APP_URL + config.API_FETCH_FEATUED_POSTS)
                .then(({ data }) => {
                    dispatch(setFeaturedPost(data))
                    return data;
                })
                .catch(function (error) {
                    console.log('Error 1 ', error);
                });
        } catch (error) {
            console.log('Error 2 ', error);
        }
    }
}

export function FetchRecentPosts() {
    return async dispatch => {
        try {
            return await axios.get(config.API_APP_URL + config.API_FETCH_THREE_RECENT_POSTS)
                .then(({ data }) => {
                    dispatch(setRecentPost(data))
                    return data;
                })
                .catch(function (error) {
                    console.log('Error 1 ', error);
                });
        } catch (error) {
            console.log('Error 2 ', error);
        }
    }
}

export function FetchAllPostsByCategory(category = '', page = 1) {
    return async dispatch => {
        try {
            let apiURL = config.API_APP_URL + config.API_FETCH_POSTS_BY_CATEGORY + '?page=' + page;
            if (category != '') {
                apiURL = config.API_APP_URL + config.API_FETCH_POSTS_BY_CATEGORY + '?category=' + category + '&page=' + page;
            }
            return await axios.get(apiURL)
                .then(({ data }) => {
                    return data;
                })
                .catch(function (error) {
                    console.log('Error 1 ', error);
                });
        } catch (error) {
            console.log('Error 2 ', error);
        }
    }
}

export function FetchAllPostsByAuthor(author = '', page = 1) {
    return async dispatch => {
        try {
            let apiURL = config.API_APP_URL + config.API_FETCH_POSTS_BY_AUTHOR + '?page=' + page;
            if (author != '') {
                apiURL = config.API_APP_URL + config.API_FETCH_POSTS_BY_AUTHOR + '?user=' + author + '&page=' + page;
            }
            return await axios.get(apiURL)
                .then(({ data }) => {
                    return data;
                })
                .catch(function (error) {
                    console.log('Error 1 ', error);
                });
        } catch (error) {
            console.log('Error 2 ', error);
        }
    }
}

export function FetchSinglePost(slug = '') {
    return async dispatch => {
        try {
            let apiURL = config.API_APP_URL + config.API_FETCH_SINGLE_POST + '/' + slug;
            return await axios.get(apiURL)
                .then(({ data }) => {
                    return data;
                })
                .catch(function (error) {
                    console.log('Error 1 ', error);
                });
        } catch (error) {
            console.log('Error 2 ', error);
        }
    }
}

export function FetchSearchPost(keyword = '') {
    return async dispatch => {
        try {
            let apiURL = config.API_APP_URL + config.API_FETCH_SEARCH_POST + '?keyword=' + keyword;
            return await axios.get(apiURL)
                .then(({ data }) => {
                    return data;
                })
                .catch(function (error) {
                    console.log('Error 1 ', error);
                });
        } catch (error) {
            console.log('Error 2 ', error);
        }
    }
}