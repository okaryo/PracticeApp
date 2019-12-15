import React from 'react';
import Header from './components/Header'
import InputForm from './components/InputForm'
import Todos from './components/Todos'
import './App.css';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      todos: [{name: '昼飯食べる'}, {name: '晩飯食べる'}]
    }
  }
  setTodo = (e: any) => {
    this.setState({
        todos: this.state.todos.concat({name: e})
    })
  }

  render() {
    return (
      <div className="App">
        <Header styleName={ "header" } />
        <InputForm
          dataState={(e: any) => this.setTodo(e)}
        />
        <Todos
          todos={ this.state.todos }
        />
        {this.state.todos.map((todo: any) => (
          <Todos key={todo.name} todoName={todo.name} />
        ))}
      </div>
    );
  }
}

export default App;
