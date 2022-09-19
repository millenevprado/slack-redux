import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions/index';


class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
    console.log(channel)
  }

  renderChannel = (channel) => {
    return (
      <div className="channel" key={channel} onClick={() => this.handleClick(channel)}>
        <span>
          <i className="fab fa-slack-hash" />
          {channel}
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="channels-sidebar">
        <h1>Le Wagon</h1>
        <div className="chat-section">
          <div className="chat-section-header">
            <h3>Channels</h3>
          </div>
          {this.props.channels.map(this.renderChannel)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
