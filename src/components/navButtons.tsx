import {Nav} from 'react-bootstrap'
import {useState} from 'react'

const NavButtons = ({onNavsButtonClick}) => {

    const [selectedNav, setSelectedNav] = useState('0')

    const onSelectHandle = (key) => {
        setSelectedNav(key)
        onNavsButtonClick(key)
    }

    return <Nav className='navButtons' fill={true} variant="pills" activeKey={selectedNav} onSelect={(eventKey) => onSelectHandle(eventKey)}>
        <Nav.Item>
            <Nav.Link eventKey="-1" href="">
                Yesterday
            </Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="0" href="">
                Today
            </Nav.Link>
        </Nav.Item>


        <Nav.Item>
            <Nav.Link eventKey="1" href="">
                Tomorrow
            </Nav.Link>
        </Nav.Item>
    </Nav>

}

export default NavButtons