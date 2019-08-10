import React from 'react';
import Footer from '../Footer'

function Development() {
  document.title = "Tom Giddings - Web Developer";
  return (
    <div className="page">
      <div className="content-wrapper development">
        <h1><i className="fas fa-terminal">&nbsp;</i>Web Development</h1>
        <p>Find me on <a href="https://github.com/tomgiddings"><i className="fab fa-github-alt">&nbsp;</i>GitHub</a>.</p>
        <ul>
          <li className="bar front expert" data-skill="React JS"></li>
          <li className="bar front expert" data-skill="Node.js"></li>
          <li className="bar front expert" data-skill="CSS"></li>
          <li className="bar front advanced" data-skill="Javascript"></li>
        <li className="bar front advanced" data-skill="Git &amp; Github"></li>
          <li className="bar front advanced" data-skill="MySQL"></li>
          <li className="bar front intermediate" data-skill="Microsoft Azure"></li>
          <li className="bar front intermediate" data-skill="MongoDB"></li>
          <li className="bar front intermediate" data-skill="TDD"></li>
          <li className="bar front basic" data-skill="Ruby &amp; Rails"></li>
        </ul>
        <Footer />
      </div>
    </div>
  );
}
export default Development;
