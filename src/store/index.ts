import { configureStore } from '@reduxjs/toolkit'
import { marraigeSliceReducer } from './marriageReducer'
import { popupReducer } from './popupReducer'

export const store = configureStore({
  reducer: {
    marriage : marraigeSliceReducer,
    popup : popupReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch