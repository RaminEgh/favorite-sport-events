import {Alert, Spinner} from 'react-bootstrap'
import {useState} from 'react'

const FetchingHandler = ({fetch}) => {
    const [show, setShow] = useState(true)
    const {data, error, isLoading, isFetching, isSuccess} = fetch
    if (data || isSuccess) return null
    if (isLoading || isFetching) {
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