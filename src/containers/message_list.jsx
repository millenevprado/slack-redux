import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => <Message message={message} key={message.created_at} />)}
      </div>
    );
  }
};

// this.props.messages is now mapped to the redux initialState sbtree "messages"
function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setCities: setCities },
//     dispatch
//   );
// }

export default connect(mapStateToProps, null)(MessageList);
