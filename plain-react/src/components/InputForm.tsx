import React from 'react';

class InputForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange = (e: any) => {
    this.setState({value: e.target.value})
  }
  handleSubmit = () => {
    this.props.dataState(this.state.value)
  }

  render() {
    return (
      <form className="InputForm">
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          value={this.state.value}
        />
        <button type="button" onClick={()=>this.handleSubmit()}>作成</button>
      </form>
    );
  }
}

export default InputForm;
