import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  render() {
    return (
      <div>
        {this.props.messages.map((message) => <Message message={message} key={message.created_at} />)}
      </div>
    );
  }
};

// this.props.messages is now mapped to the redux state sbtree "messages"
function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

// this.props.fetchMessages is now available in the container
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
