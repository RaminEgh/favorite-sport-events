import {Nav} from 'react-bootstrap'
import {useState} from 'react'

const NavsButton = ({onNavsButtonClick}) => {

    const [selectedNav, setSelectedNav] = useState('1')

    const onSelectHandle = (key) => {
        setSelectedNav(key)
        onNavsButtonClick(key)
    }

    return <Nav fill={true} variant="pills" activeKey={selectedNav} onSelect={(eventKey) => onSelectHandle(eventKey)}>
        <Nav.Item>
            <Nav.Link eventKey="-1" href="#yesterday">
                Yesterday
            </Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="0" href="#today">
                Today
            </Nav.Link>
        </Nav.Item>


        <Nav.Item>
            <Nav.Link eventKey="1" href="#tomorrow">
                Tomorrow
            </Nav.Link>
        </Nav.Item>
    </Nav>

}

export default NavsButton