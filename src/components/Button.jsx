function Button(props) {

    function changeHour() {
        props.setTimeFormat(prev => !prev)
    };

    const text1 = '12h Time Format'
    const text2 = '24h Time Format'

    return (
        <>
         <button className="format-button" onClick={changeHour}>
            {props.timeFormat ? text2 : text1}
         </button>
        </>
    )
}

export default Button;