import React from "react";


class SearchBar extends React.Component {
//Component to search videos
state = {term: ''};
//callback
onInputChange = (event) => {
this.setState({term: event.target.value})
};

onFormSubmit = event => {
    //so page doesnt refresh
event.preventDefault();
this.props.onFormSubmit(this.state.term);
}
    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Video Search</label>
                <input type="text" 
                value={this.state.term} 
                onChange={this.onInputChange}  />
                    </div>

                </form>
               
            </div>
        )
    }
 }

 export default SearchBar;