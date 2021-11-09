import PropTypes from 'prop-types'
import Button from './Button'

import { useLocation } from 'react-router-dom'

const Header = ({ title , showAdd, setShow }) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1> Dapp Header - {title}</h1>
            {/* <Button color='green' text='New' onClick={onClick}/> */}
            {location.pathname === '/' && <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'steelBlue'} setShow={setShow}/>}
        </header>
    )
}

Header.defaultProps = {
    title: "Main Page",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
