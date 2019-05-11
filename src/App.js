import React from 'react';
import Starhead from './components/StarHead';
import StarFooter from './components/StarFooter'
import ReactDOM from 'react-dom';
import { Container, List } from 'semantic-ui-react';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      search: '',
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
    fetch('https://swapi.co/api/starships')
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
    const prices = this.state.data.map(starship => {
      return <li> {starship.cost_in_credits}</li>;
    });
    //search filter through data Api
    if (this.state.isLoading) {
      return <p>is Loading..</p>;
    }

    return (
      <div>
        <Starhead/>
        <Container>
          <form>
            <input
              type='text'
              placeholder='Starships'
              onChange={this.searchInput}
            />
          </form>
          {filterNames.map((data, i) => {
            return (
              <List>
                <List.Item key={i}> {data.name}</List.Item>
              </List>
            );
          })}
        </Container>
        <StarFooter/>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
