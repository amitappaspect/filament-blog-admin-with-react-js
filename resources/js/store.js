import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './stores/CategorySlice'
import CommentSlice from './stores/CommentSlice'
import MenuSlice from './stores/MenuSlice'
import PostSlice from './stores/PostSlice'

export default configureStore({
    reducer: {
        MenuSlice: MenuSlice,
        PostSlice: PostSlice,
        CategorySlice: CategorySlice,
        CommentSlice: CommentSlice
    },
})