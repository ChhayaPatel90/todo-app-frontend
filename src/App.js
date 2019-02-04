import React, { Component } from 'react';
import Header from './components/Header';
import AddButton from './components/AddButton';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';
import TaskEntry from './components/TaskEntry';

class App extends Component {

  state = {
    data: [
      {
         id: 1,
         description: "Weigh out ingredients",
         completed: false
      },
      {
          id: 2,
          description: "Sieve flour into the bowl",
          completed: false
      },
      {
          id: 3,
          description: "Add and mix all of other dry ingredients",
          completed: false
      }
  ],
    textField: ""
  }

  handleChange = (event) => {
    this.setState({textField: event.target.value})
  }

  handleSubmit = () => {
    const textFieldData = this.state.textField;
    const arrayData = [...this.state.data];
    

    const newObject = {
      id: arrayData.length + 1,
      description: textFieldData,
      completed: false
    }

    arrayData.push(newObject);

    this.setState({
      data: arrayData
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col">
          <TaskEntry handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          </div>
          <div className="col">
          </div>
        </div>
        <TaskList listofTasks={this.state.data}/>
      </div>
    );
  }
}

export default App;









{/* <div className="row justify-content-center no-gutters" style={{ border: "1px solid red" }}>
          <div className="col-4" style={{ border: "1px solid green" }}>
            <InputBox />
          </div>
          <div className="col-4">
            <AddButton />
          </div>
        </div> */}
{/* <div>
          <TaskEntry />
        </div>
        <div>
          <TaskList />
        </div> */}

