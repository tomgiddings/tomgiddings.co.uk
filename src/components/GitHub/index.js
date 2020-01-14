// @flow
import React from 'react';
import axios from 'axios';

class GitHub extends React.Component<*> {
	constructor(props) {
	  super(props);
	  this.state = {
      repos: [],
      loading: true
    };
	}

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.user}/repos?page=1&per_page=6&sort=updated`)
    .then((response) => {
      this.setState({
        repos: response.data,
        loading: false
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ loading: false })
    });
  }

  render() {
    return (
      <section>
        {this.state.repos.length > 0 && <h3>Latest on GitHub</h3>}
        {this.state.loading && <div className="loading"><i className="fas fa-spinner fa-spin"></i>Loading...</div>}
        <ul className="cards">
          {this.state.repos.map(repo =>
            <li key={repo.id}>
              <a href={repo.html_url}>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
              </a>
            </li>
          )}
        </ul>
      </section>
    );    
  }
}
export default GitHub;
