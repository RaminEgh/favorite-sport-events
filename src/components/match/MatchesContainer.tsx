import {Card} from 'react-bootstrap'
import {timestampToTime} from 'helpers'
import Image from 'next/image'
import {useEffect, useState} from 'react'

const MatchesContainer = ({items}) => {
    let [matchFavorites, setMatchFavorites] = useState([])

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

    useEffect(() => {
        setMatchFavorites(JSON.parse(localStorage.getItem('matchFavorites')) ?? [])
    }, [])

    return <Card className='matchItem'>
        {
            items.map((item) => {
                return <div key={item.slug}>
                    <div className='matchItem__header'>
                        <div>
                            <Image className='logo' src={item.logo} width={32} height={32} alt={item.logo}/>
                            <strong className='title'>{item.name}</strong>
                        </div>
                        <span className='icon-btn' title='add to favorite' onClick={() => onStarClickHandle(item.id)}>
                            <Image src={`/assets/icons/star-${matchFavorites.includes(item.id) ? 'solid' : 'regular'}.svg`} width={25} height={25} alt='add to favorite'/>
                        </span>
                    </div>

                    <div className='matchItem__events'>
                        {
                            item.events.map(eventItem => {
                                console.log(matchFavorites)
                                console.log(matchFavorites.includes(1))
                                return <div key={eventItem.id} className='eventItem'>
                                    <div className='eventItem--home'>
                                        <strong>{eventItem.homeTeam.name}</strong>
                                    </div>
                                    <div className='eventItem--time'>
                                        <strong>{timestampToTime(eventItem.startTimestamp)}</strong>
                                    </div>
                                    <div className='eventItem--away'>
                                        <strong> {eventItem.awayTeam.name}</strong>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

            })
        }
    </Card>

}

export default MatchesContainer