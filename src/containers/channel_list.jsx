import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render() {
    return (
      this.props.channels.map((channel) => {
        return (
          <div className="channel" key={channel}>
            <span>
              <i className="fab fa-slack-hash" />
              {channel}
            </span>
          </div>
        );
      })
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps, null)(ChannelList);
