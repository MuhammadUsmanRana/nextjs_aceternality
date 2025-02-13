import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'
import { loadingSlice } from './LoadingSlice'
import { incDecSlice } from './IncDecSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        loading: loadingSlice.reducer,
        incDec: incDecSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch