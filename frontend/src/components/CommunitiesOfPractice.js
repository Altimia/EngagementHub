import React, { Component } from 'react';
import axios from 'axios';
import VisitRegistration from './VisitRegistration';
import PostVisitReport from './PostVisitReport';
class CommunitiesOfPractice extends Component {
  state = {
    communities: [],
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('http://localhost:8000/api/communities_of_practice/')
      .then(res => {
        this.setState({
          communities: res.data,
          loading: false
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {this.state.communities.map(community => (
          <div key={community.id}>
            <h2>{community.community_name}</h2>
            <p>{community.community_description}</p>
            <p>Members: {community.community_members.join(', ')}</p>
            <p>Resources: {community.community_resources}</p>
            <p>Discussions: {community.community_discussions}</p>
          </div>
        ))}
      </div>
    );
  }
}
class CommunitiesOfPractice extends Component {
  state = {
    communities: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/communities_of_practice/')
      .then(res => {
        this.setState({
          communities: res.data
        });
      })
  }

  render() {
    return (
      <div>
        {this.state.communities.map(community => (
          <div key={community.id}>
            <h2>{community.community_name}</h2>
            <p>{community.community_description}</p>
            <p>Members: {community.community_members.join(', ')}</p>
            <p>Resources: {community.community_resources}</p>
            <p>Discussions: {community.community_discussions}</p>
          </div>
        ))}
        <VisitRegistration />
        <PostVisitReport />
      </div>
    );
  }
}
