import {Alert, Spinner} from 'react-bootstrap'
import {useState} from 'react'

const FetchingHandler = ({fetch}) => {
    console.log(fetch.status)
    const [show, setShow] = useState(true)
    const {error, isLoading, isFetching, status} = fetch
    if (isFetching || isLoading || status === 'pending') {
        return <div className='backdrop'>
            <Spinner animation="grow"/>
        </div>
    }
    if (error && show) {
        return <Alert variant='danger' onClose={() => setShow(false)} dismissible>
            {error.error}
        </Alert>
    }
    return null
}

export default FetchingHandler