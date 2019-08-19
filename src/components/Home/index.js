
import React from 'react';
import Footer from '../Footer'

class Home extends React.Component<*> {
  render() {
    document.title = "Tom Giddings";
    return (
      <div className="page home">
        <div className="content-wrapper">
          <div>
            <h1><img src="/me.jpg" alt="Me" className="profile-photo" />Hi there!</h1>
            <h2>I'm Tom, a Web Developer &amp; Broadcast Engineer from Bristol.</h2>
          </div>
          <ul>
            <li><a href="https://github.com/tomgiddings"><i className="fab fa-4x fa-github-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tomgiddings/"><i className="fab fa-4x fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/tomgiddings/"><i className="fab fa-4x fa-instagram"></i></a></li>
          </ul>
          <Footer />
        </div>
      </div>
    );    
  }
}
export default Home;
