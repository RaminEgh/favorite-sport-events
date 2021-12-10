import {memo} from 'react'
import {timestampToTime} from 'helpers'

const MatchItemEvents = ({item}) => {
    return <div className='matchItem__events'>
        {
            item.events.map(eventItem => {
                return <div key={eventItem.id} className='eventItem'>
                    <div className='eventItem--home'>
                        <strong>{eventItem.homeTeam.name}</strong>
                    </div>
                    <div className='eventItem--time'>
                        <span>{timestampToTime(eventItem.startTimestamp)}</span>
                    </div>
                    <div className='eventItem--away'>
                        <strong> {eventItem.awayTeam.name}</strong>
                    </div>
                </div>
            })
        }
    </div>
}

export default memo(MatchItemEvents)