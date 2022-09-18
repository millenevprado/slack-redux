import React from 'react';
import MessageList from '../containers/message_list';


const App = () => {
  return (
    <div className="app">
      <div className="organizations-sidebar">
        <h2 className="organization active">LW</h2>
      </div>
      <MessageList />
    </div>

  );
};

export default App;
