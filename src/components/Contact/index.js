// @flow
import React from 'react';
import Footer from '../Footer'

class Contact extends React.Component<*> {
  render() {
    document.title = "Tom Giddings - Contact";
    return (
      <article className="page contact">
        <div className="content-wrapper">
          <h1>Contact Me</h1>
          <ul>
            <li><a href="https://github.com/tomgiddings"><i className="fab fa-4x fa-github-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tomgiddings/"><i className="fab fa-4x fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/tomgiddings/"><i className="fab fa-4x fa-instagram"></i></a></li>
          </ul>
        </div>
      </article>
    );
  }
}
export default Contact;
