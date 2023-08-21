import React, { Component } from 'react';

class VisitRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      community: '',
      visitor_name: '',
      visit_date: '',
      visit_details: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.community && this.state.visitor_name && this.state.visit_date && this.state.visit_details) {
      axios.post('http://localhost:8000/api/visit_registration/', this.state)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert('All fields are required!');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Community:
            <input type="text" value={this.state.community} onChange={e => this.setState({ community: e.target.value })} />
          </label>
          <label>
            Visitor Name:
            <input type="text" value={this.state.visitor_name} onChange={e => this.setState({ visitor_name: e.target.value })} />
          </label>
          <label>
            Visit Date:
            <input type="date" value={this.state.visit_date} onChange={e => this.setState({ visit_date: e.target.value })} />
          </label>
          <label>
            Visit Details:
            <textarea value={this.state.visit_details} onChange={e => this.setState({ visit_details: e.target.value })} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default VisitRegistration;
