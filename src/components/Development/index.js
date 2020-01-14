// @flow
import React from 'react';
import GitHub from '../GitHub';

class Development extends React.Component<*> {
  render() {
    document.title = 'Tom Giddings - Web Developer';
    return (
      <article className="page development">
        <div className="content-wrapper">
          <h1>Web Developer</h1>
          <p>
            I have worked on both front and back end code using React, Node.js, CSS/SCSS, Javascript, Angular, Git, MySQL, MongoDB, Ruby &amp; Rails and ColdFusion.
            I'm also happy configuring and maintaining VMware and Azure environments.
          </p>
          <p>
            I have experience working on everything from small individual projects to maintaining large platforms as part of a development team and I'm always excited to learn new technologies and languages.
          </p>
          <p>
            You can find me on <a href="https://github.com/tomgiddings"><i className="fab fa-github-alt">&nbsp;</i>GitHub</a>
            , and view my work experience on <a href="https://www.linkedin.com/in/tomgiddings/"><i className="fab fa-linkedin">&nbsp;</i>LinkedIn</a> or <a href="https://stackoverflow.com/story/tomgiddings"><i className="fab fa-stack-overflow">&nbsp;</i>Stack Overflow</a>.
          </p>
          <GitHub user="tomgiddings" />
        </div>
      </article>
    );
  }
}
export default Development;
