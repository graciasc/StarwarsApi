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
 componentDidMount() {
    this.setState({isLoading: true})
    fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data,
                isLoading:false
            })
        })
//if the state isLoading changes to false then it is loaded
// console.log(this.state.data)
  }

  render() {
      if(this.state.isLoading) { //checking for true of false for the state
          return (
              <h1> Loading Data...</h1>
          )
      }
    return (
      <div>
        <h1> {this.state.data.name}</h1>
      </div>
    );
  }
}
