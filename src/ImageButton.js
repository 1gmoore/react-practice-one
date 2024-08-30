const ImageButton = (props) => {
    return (
        <img src={props.source} alt="" className={props.classes} onClick={() => props.onWatchImageClick(props.pos)}/>
    );
}

export default ImageButton;