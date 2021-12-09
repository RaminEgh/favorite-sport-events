import {Card} from 'react-bootstrap'
import {useContext} from 'react'
import MatchHeader from './matchHeader'
import MatchItemEvents from './matchItemEvents'
import LocalStorageContext from 'contexts/localStorageContext'

const MatchesContainer = ({items}) => {
    const {matchFavorites, setMatchFavorites} = useContext(LocalStorageContext)

    const onStarClickHandle = (id) => {
        const copiedMatchFavorites = [...matchFavorites]
        const index = copiedMatchFavorites.indexOf(id)
        if (index !== -1) {
            copiedMatchFavorites.splice(index, 1)
        } else {
            copiedMatchFavorites.push(id)
        }
        setMatchFavorites(copiedMatchFavorites)
        localStorage.setItem('matchFavorites', JSON.stringify(copiedMatchFavorites))
    }

    return <Card className='matchItem'>
        {
            items?.length === 0 ? <h3 style={{textAlign: 'center'}}>no item</h3> : items?.map((item) => {
                return <div key={item.id}>
                    <MatchHeader id={item.id} logo={item.logo} name={item.name} onStartClick={onStarClickHandle}
                                 isFavorite={matchFavorites.includes(item.id)}/>
                    <MatchItemEvents item={item}/>
                </div>

            })
        }
    </Card>

}

export default MatchesContainer