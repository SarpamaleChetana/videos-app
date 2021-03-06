import React from "react";

class SearchBar extends React.Component {
    state = { term: '' }

    handleChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        //to do callback from parent component
        this.props.onTermSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={this.handleChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;