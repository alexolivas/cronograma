import React, { Component } from 'react';
import TimeLine from './Timeline';
import Event from './Event';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TimeLine>
            <Event>
              <h2>2020</h2>
              Lorem ipsum
            </Event>
            <Event right>
              <h2>2019</h2>
              Lorem ipsum
            </Event>
            <Event>
              <h2>2018</h2>
              Lorem ipsum
            </Event>
          </TimeLine>
      </div>
    );
  }
}

export default App;
