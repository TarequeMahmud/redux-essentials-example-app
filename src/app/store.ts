import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '@/features/posts/postsSlice'
import usersReducer from '@/features/users/usersSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
