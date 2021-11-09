import Button from './Button'

import { useLocation } from 'react-router-dom'

const Header = ({ showAdd, setShow, addEnabled }) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1> NFT Dapp </h1>
            {/* <Button color='green' text='New' onClick={onClick}/> */}
            {(location.pathname === '/' && addEnabled) && <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'steelBlue'} setShow={setShow}/>}
        </header>
    )
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
