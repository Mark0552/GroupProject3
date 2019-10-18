import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import GuestList from './components/guest-list';
import Budget from './components/budget/Budget';
import ChecklistCard from './components/checklist/ChecklistCard';

class App extends Component {

  constructor() {
    super()
    var user;
    this.state = {

      loggedIn: false,
      _id: null,
      username: null,
      todos: [],
      haveTodos: [],
      doneTodos: []

    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.fillTodoArrays = this.fillTodoArrays.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject)
    this.fillTodoArrays();
    
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        var user = response.data.user;

        this.setState({
          loggedIn: true,
          _id: user._id,
          username: user.username,
          todos: user.todos
        })
        
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  handleClick = (todo, username, completed) => {
    axios.put('/user/' , {
      username: username,  
      todo: todo,
      completed: completed,
      todos: this.state.todos
    })
      .then(response => {
        if (!response.data.errmsg) {
          console.log("Update Successful")
          this.props.updateUser(response);
        } else {
          console.log('Update Error')
        }
      }).catch(error => {
        console.log('Update Error: ')
        console.log(error)
      })
  }

  fillTodoArrays() {
    const userHaveTodos = [];
    const userDoneTodos = [];
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxx")

    this.state.todos.forEach(function (seperatedTodo) {
      if (seperatedTodo.completed === "Completed") {
        userHaveTodos.push(seperatedTodo);
      } else {
        userDoneTodos.push(seperatedTodo);
      }
    })
    this.setState({
      haveTodos: userHaveTodos,
      doneTodos: userDoneTodos
    })
  }


  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Logged in as {this.state.username}</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup />}
        />
        <Route
          path="/WeddingCheckList"
          render={() =>
            <div className="row">
              <div className="col">To Do
              {this.state.haveTodos.map(todos => (
                <ChecklistCard
                  key={todos.todo}                  
                  time={todos.time}
                  todo={todos.todo}
                  completed={todos.completed}
                  handleClick={this.handleClick}                  
                />
              ))}
              </div>
              <div className="col">Completed
              {this.state.doneTodos.map(todos => (
                <ChecklistCard
                  key={todos.todo}                  
                  todo={todos.todo}
                  time={todos.time}
                  completed={todos.completed}
                  handleClick={this.handleClick}
                />
              ))}
              </div>
            </div>

          }
        />
        <Route
          path="/guestlist"
          render={() =>
            <GuestList />}
        />
        <Route
          path="/budget"
          render={() =>
            <Budget
              key= {this.state.username}
              username= {this.state.username}
            />}
        />
      </div>
    );
  }
}

export default App;
