import React from 'react';
import ReactDOM from 'react-dom';

import Nav from '../src/nav.js'
import Home from './home.jsx'
import AddRecipe from './components/addRecipe.jsx';
import Login from './components/login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      username: 'Forker Of Forks',
      currentPage: '/home',
      recipes: [],
      currentPage: 'home',
      searchTerm: null
    }
  }



  setSearchTerm(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  render () {
    // return (<div>
    //   <Home setSearchTerm={this.setSearchTerm.bind(this)}
    //         searchRecipes={this.searchRecipes.bind(this)}
    //         searchTerm={this.state.searchTerm}
    //         recipes={this.state.recipes}
    //   />
    // </div>)
    // return (<div>
    //   <Nav username={this.state.username}/>
    //   <Home setSearchTerm={this.setSearchTerm.bind(this)}
    //         searchRecipes={this.searchRecipes.bind(this)}
    //         searchTerm={this.state.searchTerm}
    //         recipes={this.state.recipes}
    //   />
    // </div>)
      return (
        <Login />
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// NOTE TO SELF: 
// To start, run from terminal the following...
// npm run react-dev
// npm run server-dev

