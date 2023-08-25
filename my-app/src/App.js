import React, { Component } from "react";

class App extends Component {
  state = {
    firstName: "Sam Smith",
    age: 28,
    designation: "Singer",
    city: "New York",
    arr: [97, 80, 79],
    contact: {
      email: "s.smith@gmail.com",
    },
    employeeList: [
      {
        name: "Miley",
        age: 25,
        id: 1,
      },
      {
        name: "Britney",
        age: 21,
        id: 2,
      },
      {
        name: "Bruno",
        age: 29,
        id: 3,
      },
    ],
  };

  handleUpdate = () => {
    this.setState({
      designation: "Producer",
      age: 33,
    });
  };


  render() {
    return (
      <div>
        <p>
          My name is {this.state.firstName} age: {this.state.age}, working as a{" "}
          {this.state.designation}
        </p>
        <p>Contact: {this.state.contact.email}</p>
        <p>
        Numbers: {this.state.arr.map((number, index) => {
        return <span key={index}>{number} | </span>;  
        })}
        </p>

        <button onClick={this.handleUpdate}>Update Info</button>
      </div>
    );
  }
}

export default App;
