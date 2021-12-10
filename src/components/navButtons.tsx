import {Nav} from 'react-bootstrap'
import {useState} from 'react'

const NavButtons = ({onTabClick, onDateClick}) => {

    const [selectedDate, setSelectedDate] = useState('0')
    const [selectedTab, setSelectedTab] = useState('0')

    const onDateSelect = (key) => {
        setSelectedDate(key)
        onDateClick(key)
    }

    const onTabSelect = (key) => {
        setSelectedTab(key)
        onTabClick(key)
    }

    return <div className='navButtons'>
        <Nav fill={true} variant="pills" activeKey={selectedTab} onSelect={(eventKey) => onTabSelect(eventKey)}>
            <Nav.Item>
                <Nav.Link eventKey="0" href="">
                    ALL
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="1" href="">
                    Favorites
                </Nav.Link>
            </Nav.Item>

        </Nav>
        <Nav fill={true} variant="pills" activeKey={selectedDate} onSelect={(eventKey) => onDateSelect(eventKey)}>

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
    </div>

}

export default NavButtons