import {Container} from 'react-bootstrap'

const PublicLayout = ({children}) => {
    return <Container fluid='lg' style={{paddingTop: '16px', paddingBottom: '16px'}}>
        {children}
    </Container>
}

export default PublicLayout