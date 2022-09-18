import React from 'react';
import MessageList from '../containers/message_list';


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
          <div className="channel">
            <span>
              <i className="fab fa-slack-hash" />
              general
            </span>
          </div>
          <div className="channel">
            <span>
              <i className="fab fa-slack-hash" />
              react
            </span>
          </div>
          <div className="channel">
            <span>
              <i className="fab fa-slack-hash" />
              rails
            </span>
          </div>
        </div>
      </div>
      <MessageList />
    </div>

  );
};

export default App;
