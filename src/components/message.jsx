import React from 'react';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  const time = new Date(created_at).toLocaleDateString();
  return (
    <div className="message">
      <p className="d-flex align-items-center justify-content-center">
        <strong>{author}</strong> -
        <small>{time}</small>
      </p>
      <p>{content}</p>
    </div>
  );
};

export default Message;
