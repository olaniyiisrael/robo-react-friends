import SearchBox from './SearchBox';
import Cardlist from './Cardlist';
import "./App.css";
// import users from './users.json'
import React from 'react';
import ErrorHandler from './ErrorHandler';


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      searchInput: '',
      robots: [],
      loading: false
    }
  }

  updateSearchInput = (event) =>{
    this.setState({searchInput:event.target.value})
  }

  componentDidMount(){
    this.setState({loading: true})

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState ({robots: json, loading: false}))
    .catch((err) => console.log(err))
    // this.setState({loading: false})
  }

  render(){
    const filteredRobots = this.state.robots.filter(item =>(item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())));
      console.log("filteredRobots:", filteredRobots);


    return (
      <div className="">
        <h1 style={{textAlign:'center'}}>Robofriends</h1>
        
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        {this.state.loading && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
        {!filteredRobots.length && !this.state.loading && <h3 style={{textAlign: 'center'}}>no result found</h3>}
        <ErrorHandler>
        <Cardlist clients ={filteredRobots}/>
        </ErrorHandler>
      </div>
    );
  }
}


export default App;