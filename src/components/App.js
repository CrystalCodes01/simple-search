import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { term: '' };

  onSearchSubmit = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;
