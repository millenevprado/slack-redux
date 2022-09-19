import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';


const App = () => {
  return (
    <div className="app">
      <div className="organizations-sidebar">
        <h2 className="organization active">LW</h2>
      </div>
      <div className="channels-sidebar">
        <h1>Le Wagon</h1>
        <div className="chat-section">
          <div className="chat-section-header">
            <h3>Channels</h3>
          </div>
          <ChannelList />
        </div>
      </div>
      <MessageList />
    </div>

  );
};

export default App;
