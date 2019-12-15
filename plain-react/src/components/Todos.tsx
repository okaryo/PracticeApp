import React from 'react';

class Todos extends React.Component<any, any> {
  render() {
    const { todoName } = this.props

    return (
      <div>{todoName}</div>
    );
  }
}

export default Todos;
