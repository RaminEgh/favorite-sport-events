import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from 'store'
import PublicLayout from 'layout/publicLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/matches.scss'
import LocalStorageContext from 'contexts/localStorageContext'
import {useEffect, useState} from 'react'

export default function MyApp(props) {
    const {Component, pageProps} = props
    let [matchFavorites, setMatchFavorites] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMatchFavorites(JSON.parse(localStorage.getItem('matchFavorites')) ?? [])
        }
    }, [])


    return <Provider store={store}>
        <LocalStorageContext.Provider value={{matchFavorites, setMatchFavorites}}>
            <Head>
                <title>Sport Events</title>
                <meta name='description' content='Sport Events'/>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
            </Head>
            <PublicLayout>
                <Component {...pageProps} />
            </PublicLayout>
        </LocalStorageContext.Provider>

    </Provider>

}
