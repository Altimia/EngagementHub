import React, { Component } from 'react';
import axios from 'axios';

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
      </div>
    );
  }
}class VisitRegistration extends Component {
  // Implementation of VisitRegistration component goes here
}

class PostVisitReport extends Component {
  // Implementation of PostVisitReport component goes here
}

class CommunitiesOfPractice extends Component {
  // Existing implementation of CommunitiesOfPractice component

  // Add VisitRegistration and PostVisitReport components
  render() {
    return (
      <div>
        {/* Existing code for displaying community data */}
        
        <VisitRegistration />
        <PostVisitReport />
      </div>
    );
  }
}
