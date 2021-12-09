import {memo} from 'react'
import Image from 'next/image'

const MatchHeader = ({id, logo, name, onStartClick, isFavorite}) => {
    return <div className='matchItem__header'>
        <div>
            <Image className='logo' src={logo} width={32} height={32} alt={name}/>
            <strong className='title'>{name}</strong>
        </div>
        <span className='icon-btn' title='add to favorite' onClick={() => onStartClick(id)}>
            <Image src={`/assets/icons/star-${isFavorite ? 'solid' : 'regular'}.svg`} width={25} height={25} alt='add to favorite'/>
        </span>
    </div>
}

export default memo(MatchHeader)