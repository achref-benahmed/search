import React from 'react' ;

class SearchBar extends React.Component {

  onInputChange(event){

    console.log(event.target.value);
  }

  render() {
    return (
      <div className= ' ui segment'>
        <form className = 'ui form' >
          <div className = 'ui field'>
            <label > Search For an Image: </label>
            <input type='text' onChange={this.OnInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
