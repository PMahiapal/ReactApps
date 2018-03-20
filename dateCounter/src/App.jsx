import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'March 20, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form >
          <FormControl
            className="Deadline-input"
            placeholder='Enter New Date Here....'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <button
          className='btn btn-success'
          onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </Form>
      </div>
    )
  }
}

export default App;
