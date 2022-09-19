import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions/index';


class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannel = (channel) => {
    let classes = "channel";
    if (channel === this.props.selectedChannel) {
      classes += " active";
    }

    return (
      <div className={classes}  key={channel} onClick={() => this.handleClick(channel)}>
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
  return bindActionCreators( { selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
