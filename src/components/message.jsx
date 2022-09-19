import React from 'react';

const strToRGB = (string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
};

const Message = (props) => {
  const { author, content, created_at } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message">
      <p className="d-flex align-items-center justify-content-center">
        <span style={{ color: strToRGB(author) }}><strong>{author }</strong></span>
        <small>- {time}</small>
      </p>
      <p>{content}</p>
    </div>
  );
};

export default Message;
