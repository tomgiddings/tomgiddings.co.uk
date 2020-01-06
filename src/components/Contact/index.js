// @flow
import React from 'react';
import Footer from '../Footer'

class Contact extends React.Component<*> {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  render() {
    const { status } = this.state;
    document.title = 'Tom Giddings - Contact';
    return (
      <article className="page contact">
        <div className="content-wrapper">
          <h1>Contact Me</h1>
          <form onSubmit={this.submitForm} action="https://formspree.io/xknolrqo" method="POST">
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Message:</label>
            <textarea name="message" rows="5" required></textarea>
            {status === "SUCCESS" ? <p>Thankyou! I'll get back to you as soon as possible.</p> : <button>Send</button>}
            {status === "ERROR" && <p>Ooops! There was an error. Please try again.</p>}
          </form>
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
