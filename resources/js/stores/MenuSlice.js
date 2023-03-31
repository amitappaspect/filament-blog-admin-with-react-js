import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from './../constants'


const MenuSlice = createSlice({
    name: 'MenuSlice',
    initialState: {
        menu: [],
    },
    reducers: {
        setMenu: (state, { payload }) => {
            state.menu = payload
        },
    },
})

export const { setMenu } = MenuSlice.actions
export const storeAllMenu = state => state.MenuSlice.menu;
export default MenuSlice.reducer

export function FetchMenu() {
    return async dispatch => {
        try {
            return await axios.get(config.API_APP_URL + config.API_FETCH_MENU)
                .then(({ data }) => {
                    dispatch(setMenu(data))
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