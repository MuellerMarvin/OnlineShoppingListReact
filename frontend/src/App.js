import React from 'react';
import logo from './logo.svg';
import deleteIcon from './delete-24px.svg'
import './App.css';
const axios = require('axios').default;

// set some defaults for axios
axios.defaults.baseURL = 'http://localhost:9000';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    }

    this.AddItem = this.AddItem.bind(this);
    this.RemoveItem = this.RemoveItem.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    let responseList = []; // provide an empty list
    await axios.get('/lists')
    .then(function (response) {
      responseList = response.data.list.slice()
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      list: responseList,
    });
  }

  AddItem(itemName) {
    if (itemName == '' || itemName == undefined) {
      return;
    }

    var newList = this.state.list.slice();
    newList.push(itemName);
    this.setState({ list: newList });
  }

  RemoveItem(index) {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({ list: newList });
  }

  render() {
    var listDisplay;

    if (this.state.list.length > 0) {
      listDisplay = this.state.list.map((item, i) => <ListItem itemName={ item } onAddButtonClick={ this.AddItem } onRemoveButtonClick={() => this.RemoveItem(i) } /> )
    }
    else {
      listDisplay = <p class="noselect">There is no items to show!</p>
    }

    return (
      <div className="App">
        <h1>Public Shoppinglist</h1>
        <AddDialog onAddButtonClick={ this.AddItem }/>
        <div className="ListWrapper">
          <div className="ItemList">
            { listDisplay }
          </div>
        </div>
      </div>
    );
  }
}

class AddDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  runAddEvent() {
    // retrieve and clear the value of the textfield
    var value = document.getElementById('AddDialogTextField').value;
    document.getElementById('AddDialogTextField').value = "";

    this.props.onAddButtonClick(value);
  }

  checkForEnter = (event) => {
    if(event.key === 'Enter') {
      this.runAddEvent();
    }
  }

  render() {
    return (
      <div className="AddDialog">
        <input id="AddDialogTextField" placeholder="a new entry..." type="text" onKeyUp={ this.checkForEnter }/>
        <button onClick={() => this.runAddEvent() }>Add</button>
      </div>
    );
  }
}

function ListItem(props) {
  return(
    <div className="ListItem">
      <p>
        { props.itemName }
      </p>
      <input class="ImageButton" type="image" src={ deleteIcon } onClick={ props.onRemoveButtonClick }/>
    </div>
  );
}

export default App;
