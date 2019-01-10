import React, { Component } from 'react';
import Header from './components/Header';
import AddButton from './components/AddButton';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';
import TaskEntry from './components/TextEntry';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row justify-content-center no-gutters" style={{border: "1px solid red"}}>
          <div className="col-4" style={{border: "1px solid green"}}>
           <InputBox />
        </div>
        <div className="col-4">
          <AddButton />
        </div>
        <div>
          <TaskEntry />
        </div>
        </div>
          <TaskList />
      </div>
    );
  }
}

export default App;
