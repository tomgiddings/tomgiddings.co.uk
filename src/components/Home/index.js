// @flow
import React from 'react';
import Footer from '../Footer'

class Home extends React.Component<*> {
  state = {
    hour: null,
    date: new Date(),
    timeStamp: ''
  }

  componentDidMount() {
    this.getHour();
    this.getTimeStamp();
  }

  padZero = (value) => {
    return (value < 10 ? '0' + (value.toString()).slice(-2) : value);
  }

  getTimeStamp = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const timeStamp = days[this.state.date.getDay()] + " "
      + months[this.state.date.getMonth()] + ' '
      + this.state.date.getDate() +  ' '
      + this.padZero(this.state.date.getHours()) + ':'
      + this.padZero(this.state.date.getMinutes()) + ':'
      + this.padZero(this.state.date.getSeconds());
    this.setState({
      timeStamp
    });
  }

  getHour = () => {
   const date = new Date();
   const hour = this.state.date.getHours()
   this.setState({
      hour
   });
  } 

  render() {
    const {hour, timeStamp} = this.state;
    document.title = 'Tom Giddings - Web Developer and Broadcast Engineer';
    return (
      <article className="page home">
        <div className="content-wrapper">
          <div className="terminal">
            <div className="fakeMenu">
              <div className="fakeButtons fakeClose"></div>
              <div className="fakeButtons fakeMinimize"></div>
              <div className="fakeButtons fakeZoom"></div>
            </div>
            <div className="fakeScreen">
              <p>Last login: {timeStamp} on ttys000</p>
              <p className="type-text">$ Good {hour < 12 ? `morning` : hour < 16 ? 'afternoon' : `evening`}.</p>
              <p className="type-text">$ I'm Tom, a Web Developer &amp; Broadcast Engineer.&#9608;</p>
            </div>
          </div>
        </div>
      </article>
    );    
  }
}
export default Home;
