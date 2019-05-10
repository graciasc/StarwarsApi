import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
      isLoading: false
    };
  }
  //cors error going to try just using .then().then()
  async componentDidMount() {
    this.setState({ isLoading: true }); //setting state to true to display loading
    const response = await fetch("http://swapi.co/api/starships/",{mode:'no-cors'}); // cors error
    const json = await response.json();
    this.setState({
      data: json.results,
      isLoading: false //
    });
//if the state isLoading changes to false then it is loaded
  }

  render() {
      if(this.state.isLoading) { //checking for true of false for the state
          return (
              <h1> Loading Data...</h1>
          )
      }
    return (
      <div>
        <h1> Hello World</h1>
      </div>
    );
  }
}
