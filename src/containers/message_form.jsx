import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' }); // reset message input
  }

  render() {
    return (
      <form className="mt-2" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          placeholder="Type your message..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

// this.props.createMessage is now available in the container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}


function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
