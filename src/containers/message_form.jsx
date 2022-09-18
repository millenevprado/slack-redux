import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MessageForm;
