import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
        gifs: []
    };
  }

  componentDidMount() {
      fetch
      ('http://api.giphy.com/v1/gifs/trending?api_key=JxdrbxzwdKM1QjPWfftipzRFIb51wAyg')
          .then(response => response.json())
          .then(responseData => {
              this.setState({ gifs: responseData.data });
          })
          .catch(error => {
              console.log('Error fetching and parsin data', error);
          });
  }

  performSearch = (query) => {
      fetch
      (`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=JxdrbxzwdKM1QjPWfftipzRFIb51wAyg`)
          .then(response => response.json())
          .then(responseData => {
              this.setState({ gifs: responseData.data });
          })
          .catch(error => {
              console.log('Error fetching and parsin data', error);
          });
  }

    render() {
      console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
