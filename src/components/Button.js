const Button = ({ color, text, setShow }) => {
    return (
        <button 
            onClick={setShow}
            style={{backgroundColor: color}} 
            className='btn'
        >
            {text}
        </button>
    )
}

export default Button