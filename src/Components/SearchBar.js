import React from 'react' ;

class SearchBar extends React.Component {

  state = {term : 'Type something'};

  render() {
    return (
      <div className= ' ui segment'>
        <form className = 'ui form' >
          <div className = 'ui field'>
            <label > Search For an Image: </label>
            <input
            type='text'
            value ={this.state.term}
            onChange={e => this.setState({term : e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
