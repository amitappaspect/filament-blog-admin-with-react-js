import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from './../constants'


const CategorySlice = createSlice({
    name: 'CategorySlice',
    initialState: {
        categories: [],
    },
    reducers: {
        setCategories: (state, { payload }) => {
            state.categories = payload
        },
    },
})

export const { setCategories } = CategorySlice.actions
export const storeAllCategories = state => state.CategorySlice.categories;
export default CategorySlice.reducer

export function FetchCategories() {
    return async dispatch => {
        try {
            return await axios.get(config.API_APP_URL + config.API_FETCH_CATEGORIES_WITH_COUNT)
                .then(({ data }) => {
                    dispatch(setCategories(data))
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