import React from 'react';

class SearchFunctionality extends React.Component {
  render() {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '', searchResults: '' };
    }

    handleInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`/api/search?search_term=${this.state.searchTerm}`);
        const results = await response.json();
        this.setState({ searchResults: results });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" value={this.state.searchTerm} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    {this.state.searchResults}
                </div>
            </div>
        );
    }
  }
}

export default SearchFunctionality;
