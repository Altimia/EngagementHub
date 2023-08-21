import React, { Component } from 'react';

class PostVisitReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visit: '',
      report_date: '',
      report_details: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // Replace the above line with actual form submission logic
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Visit:
            <input type="text" value={this.state.visit} onChange={e => this.setState({ visit: e.target.value })} />
          </label>
          <label>
            Report Date:
            <input type="date" value={this.state.report_date} onChange={e => this.setState({ report_date: e.target.value })} />
          </label>
          <label>
            Report Details:
            <textarea value={this.state.report_details} onChange={e => this.setState({ report_details: e.target.value })} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostVisitReport;
