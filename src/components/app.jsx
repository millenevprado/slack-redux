import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className="organizations-sidebar">
        <h2 className="organization active">LW</h2>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
