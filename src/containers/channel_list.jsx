import React, { Component } from 'react';

class ChannelList extends Component {
  render() {
    return (
      this.props.channels.map((channel) => {
        return (
          <div className="channel">
            <span>
              <i className="fab fa-slack-hash" />
              {channel}
            </span>
          </div>
        );
      })
    );
  }
};

export default ChannelList;
