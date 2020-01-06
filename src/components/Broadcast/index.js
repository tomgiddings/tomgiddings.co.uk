// @flow
import React from 'react';
import Footer from '../Footer'

class Broadcast extends React.Component<*> {
  render() {
    document.title = "Tom Giddings - Broadcast Engineer";
    return (
      <article className="page broadcast">
        <div className="content-wrapper">
          <h1>Broadcast Engineer</h1>
          <p>I've worked as an engineer from Student and Community Radio through to national brands including Absolute Radio, Kiss, Magic, Planet Rock, and Kerrang! Radio.</p>
          <p>My work has included:</p>
          <ul>
            <li>Technical installation and refurbishment of broadcast studios.</li>
            <li>Outside Broadcasts including Snowbombing Festival, The Brit Awards, and the Isle of Wight Festival.</li>
            <li>Helping to maintain broadcast and IT systems, from studio hardware to VMware vSphere environments.</li>
            <li>Supporting brands both during and out of hours.</li>
          </ul>
          <p>I'm currently part of <a href="https://www.safepairofhands.co.uk">Safe Pair of Hands Technology</a> working on IT and broadcast projects, and you can find out more about my work on <a href="https://www.linkedin.com/in/tomgiddings/"><i className="fab fa-linkedin">&nbsp;</i>LinkedIn</a>.</p>
          <a href="https://www.safepairofhands.co.uk">
            <img src="/logos/spohlogo.png" alt="Safe Pair of Hands Technology" />
          </a>
        </div>
      </article>
    );
  }
}
export default Broadcast;
