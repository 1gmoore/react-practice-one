const DisplayButton = (props) => {
    return (<button className={props.classes} onClick={props.onDisplayButtonClick}>{props.text}</button>);
}

export default DisplayButton;