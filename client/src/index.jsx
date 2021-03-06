import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
var server = 'http://localhost:1128';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }
  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: server + '/repos',
      contentType: 'text/plain',
      success: (data) => (
        this.setState({repos: data})
      ),
      error: function() {
        console.log('There was an error');
      }
    })
  }
  update(data) {
    this.setState({repos: data})
  }
  search (term, cb) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: server + '/repos',
      data: term,
      contentType: 'text/plain',
      success: function(data) {
        console.log('Success! \nHere is your data: ', data)
      },
      error: function() {
        console.log('There was an error');
      }
    })
    $.ajax({
      method: 'GET',
      url: server + '/repos',
      data: term,
      contentType: 'text/plain',
      success: function(data) {
        console.log('Success! \nHere is your data: ', data);
        cb(data);

      },
      error: function() {
        console.log('There was an error');
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search update={this.update.bind(this)} onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));