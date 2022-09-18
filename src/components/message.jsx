import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <p><strong>{props.message.author}</strong></p>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
