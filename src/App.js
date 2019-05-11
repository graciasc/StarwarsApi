import React from "react";
import Starhead from './components/StarshipHead'
import ReactDOM from "react-dom";
    import {Header,Segment,Container} from 'semantic-ui-react'

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      search: "",
      isLoading: false
    };
    this.searchInput = this.searchInput.bind(this);
  }

  searchInput(e) {
    this.setState({
      search: e.target.value
    });
  }
  async componentDidMount() {
    // this.state.isLoading = true have to set isLoading to true to Load the page
    this.setState({ isLoading: true });
    fetch("https://swapi.co/api/starships")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results,
          isLoading: false
        });
      });
  }
  render() {
    console.log(this.state.isLoading); // working loading

    const filterNames = this.state.data.filter(search => {
      return (
        search.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    //search filter through data Api
    if (this.state.isLoading) {
      return <p>is Loading..</p>;
    }

    return (
      <div>
        <Starhead/>
        <form>
          <input type="text" placeholder="Starships" onChange={this.searchInput} />
        </form>
        {filterNames.map((data, i) => {
          return <li key={i}> {data.name}</li>;
        })}

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
