import React, { Component } from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
     const response = await unsplash.get('https://api.unsplash.com/search/photos', {
        params: { query: term }
    });

    this.setState({images: response.data.results});
  }

  // onSearchSubmit = (term) => {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID rCkN0m-130H9znt2lphHdgo7EnUFMdz9d7wWkpAelVI'
  //     }
  //   }).then((response) => {
  //     console.log(response.data.results)
  //   })
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;
