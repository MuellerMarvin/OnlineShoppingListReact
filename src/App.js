import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [ 'apples', 'bananas', 'lemons' ],
    };
  }

  render() {
    var listItems = this.state.list.map((item, i) => <ListItem itemName={ item } index={ i }></ListItem>)
    return (
      <div className="App">
        <h1>Public Shoppinglist</h1>
        <AddDialog/>
        <li>
          { listItems }
        </li>
      </div>
    );
  }
}

class AddDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AddDialog">
        <input id="addDialogTextField" type="text"/>
        <button>Add</button>
      </div>
    );
  }
}

function ListItem(props) {
  return(
    <div className="ListItem">
      <li>
        { props.itemName }
      </li>
      <button>x</button>
    </div>
  );
}

export default App;
