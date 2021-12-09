import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {MatchModel} from 'models'
import {getDate} from 'helpers'

export const matchApi = createApi({
    reducerPath: 'matchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sportscentral.io/new-api/' }),
    endpoints: (builder) => ({
        matches: builder.query<[], number|void>({
            query: (number = 0) => `/matches?date=${getDate(number)}`
        })
    })
})

export const { useMatchesQuery, useLazyMatchesQuery } = matchApi
