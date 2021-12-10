import {NavsButton, MatchesContainer, FetchingHandler} from 'components'
import {getDate} from 'helpers'
import {useLazyMatchesQuery} from 'services/matchApi'
import {useContext, useEffect, useState} from 'react'
import LocalStorageContext from 'contexts/localStorageContext'

const Matches = ({matches}: any) => {
    const {matchFavorites} = useContext(LocalStorageContext)

    let [trigger, data] = useLazyMatchesQuery()

    const [selectedDate, setSelectedDate] = useState(0)
    const [isFavoritesTab, setIsFavoritesTab] = useState(false)
    const [favoritesData, setFavoritesData] = useState([])

    const handleNewTabSelected = (eventKey) => {
        if (eventKey === '1') {
            if (!data.data) {
                trigger(selectedDate)
            }
            setIsFavoritesTab(true)
        } else {
            setIsFavoritesTab(false)
        }
    }


    useEffect(() => {
        // @ts-ignore
        setFavoritesData(data.data?.filter(item => matchFavorites.includes(item.id)))
    }, [data.data, selectedDate, isFavoritesTab])

    const onNavsButtonClickHandle = (key) => {
        const keyNumber = parseInt(key)
        setSelectedDate(keyNumber)
        trigger(keyNumber)
    }


    return <>
        <FetchingHandler fetch={data}/>
        <NavsButton onTabClick={handleNewTabSelected} onDateClick={onNavsButtonClickHandle}/>
        {
            isFavoritesTab ? <MatchesContainer items={favoritesData}/> :
                <MatchesContainer items={data.data ?? matches}/>
        }

    </>

}

export async function getStaticProps() {
    const res = await fetch(`https://sportscentral.io/new-api/matches?date=${getDate()}`)
    const data = await res.json()
    return {
        revalidate: 60,
        props: {matches: data}
    }
}

export default Matches