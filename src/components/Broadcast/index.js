// @flow
import React from 'react';
import Footer from '../Footer'

class Broadcast extends React.Component<*> {
  render() {
    document.title = "Tom Giddings - Broadcast Engineer";
    return (
      <div className="page">
        <div className="content-wrapper broadcast">
          <h1><i className="fas fa-headphones">&nbsp;</i>Broadcast Engineering</h1>
          <p>I've worked as an engineer from Student and Community Radio through to national brands including Absolute Radio, Kiss, Magic, Planet Rock, and Kerrang! Radio.</p>
          <p>In 2017, I became one of the founding directors of <a href="https://www.safepairofhands.co.uk">Safe Pair of Hands Technology</a>, focussing on broadcast technology and IT.</p>
          <ul>
            <li>Studio installation and configuration.</li>
            <li>Worked on Outside Broadcasts including Snowbombing Festival, The Brit Awards, and the Isle of Wight Festival.</li>
            <li>Provided support including out of hours work.</li>
          </ul>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Broadcast;
