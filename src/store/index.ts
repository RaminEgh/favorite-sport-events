import { configureStore } from '@reduxjs/toolkit'
import {matchApi} from 'services/matchApi'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [matchApi.reducerPath]: matchApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matchApi.middleware),
})
