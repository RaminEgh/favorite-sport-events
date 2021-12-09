import { createContext } from 'react'
import {MATCH_FAVORITES} from 'constants/localKey'
const LocalStorageContext = createContext({
    [MATCH_FAVORITES]: [],
    setMatchFavorites: undefined
})

export default LocalStorageContext
