class Watch extends Component {
    render() {
        return (
            <div id="watch-wrapper">
                <img id="watch-img" src={props.imageUrl} alt="black"/>
                <div id="watch-overlay"></div>
                <div id="heart-overlay">
                    <i id="heart-img" className="fa fa-heartbeat" aria-hidden="true"></i>
                    <div id="rate">78</div>
                </div>
            </div>
            )
        }
 }

 export default Watch;