import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ProductData from './ProductData';
import ImageButton from './ImageButton';
import DisplayButton from './DisplayButton';

class App extends Component {
  state = {
    selectedWatch: 0,
    showClock: true,
    showHeartBeat: false,
  }

  onWatchImageClick = (pos) => {
    console.log('button pressed:' + pos);
    this.setState({selectedWatch: pos});
  }

  onDisplayButtonClick = (timeSelected) => {
    console.log('button pressed:' + timeSelected);
    this.setState({showClock: timeSelected, showHeartBeat: !timeSelected});
  }

  render() {
    return (
      <div className="App">
        <div id="watch-wrapper">
          <img id="watch-img" src={ProductData.colorOptions[this.state.selectedWatch].imageUrl} alt=""/>
          {this.state.showClock ? <div id="watch-overlay">{new Date().toTimeString().split(' ')[0]}</div> : null}
          { this.state.showHeartBeat ? <div id="heart-overlay">
                                        <i id="heart-img" className="fa fa-heartbeat"></i>
                                        <div id="rate">78</div>
                                      </div> : null
          }
        </div>
        <div id="desc-wrapper">
          <h1>{ProductData.title}</h1>
          <p>{ProductData.description}</p>
          <p className='label'>Select Color</p>
          <div>
            <ImageButton key="watch_btn_1" classes={this.state.selectedWatch == 0 ? "watch-img-btn selected" : "watch-img-btn"} source={ProductData.colorOptions[0].imageUrl} onWatchImageClick={() => this.onWatchImageClick(0)}/>
            <ImageButton key="watch_btn_2" classes={this.state.selectedWatch == 1 ? "watch-img-btn selected" : "watch-img-btn"} source={ProductData.colorOptions[1].imageUrl} onWatchImageClick={() => this.onWatchImageClick(1)}/>
            <ImageButton key="watch_btn_3" classes={this.state.selectedWatch == 2 ? "watch-img-btn selected" : "watch-img-btn"} source={ProductData.colorOptions[2].imageUrl} onWatchImageClick={() => this.onWatchImageClick(2)}/>
            <ImageButton key="watch_btn_4" classes={this.state.selectedWatch == 3 ? "watch-img-btn selected" : "watch-img-btn"} source={ProductData.colorOptions[3].imageUrl} onWatchImageClick={() => this.onWatchImageClick(3)}/>
          </div>
          <p className='label'>Features</p>
          <div>
            <DisplayButton key="display_btn_1" classes={this.state.showClock ? "display-btn selected" : "display-btn"} text="Time" onDisplayButtonClick={() => this.onDisplayButtonClick(true)}/>
            <DisplayButton key="display_btn_2" classes={this.state.showHeartBeat ? "display-btn selected" : "display-btn"} text="Heart Rate" onDisplayButtonClick={() => this.onDisplayButtonClick(false)}/>
          </div>
          <div>
            <input id="buy-btn" type="button" value="Buy Now"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
