import React from 'react';

function Comment(props) {
  return (
    <div>
      <img src={props.author.avator_url} alt={props.author.name} />
      <h4>{props.author.name}</h4>
      <p>{props.author.highlight}</p>
      <strong>{props.text}</strong>
      <p>{props.date.toLocaleDateString()}</p>
    </div>
  );
}

export default Comment;
