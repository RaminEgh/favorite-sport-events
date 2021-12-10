import React from 'react'
import {Image} from 'react-bootstrap'

const NoItemFound = () => {
    return (
        <div className='noItemFound'>
            <Image src='/assets/icons/folder-open-regular.svg' height={32} width={32}/>
            <span>&nbsp;No Item Exists</span>
        </div>
    )
}

export default NoItemFound