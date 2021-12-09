import {NavsButton, MatchesContainer, FetchingHandler} from 'components'
import {Tab, Tabs} from 'react-bootstrap'
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
        if (eventKey === 'favorites') {
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


    return <div>
        <NavsButton onNavsButtonClick={onNavsButtonClickHandle}/>
        <FetchingHandler fetch={data} />
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3" onSelect={handleNewTabSelected}>
            <Tab eventKey="all" title="All">
                <MatchesContainer items={data.data ?? matches}/>
            </Tab>
            <Tab eventKey="favorites" title="Favorites">
                <MatchesContainer items={favoritesData}/>
            </Tab>
        </Tabs>

    </div>

}

export async function getStaticProps() {
    const res = await fetch(`https://sportscentral.io/new-api/matches?date=${getDate()}`)
    const data = await res.json()
    return {
        revalidate: 60,
        props: { matches: data }
    }
}

export default Matches