import './App.css';
import React from 'react';

import Greet from './components/Greet';
import Comment from './components/Comment';

let comment_element = {
  author: {
    name: 'Joe',
    avator_url: 'http://placekitten.com/g/64/64',
    highlight: 'Front end developer',
  },
  date: new Date(),
  text: 'Just A comment',
};

function App() {
  return (
    <div>
      <Greet name='Raja' />
      <Comment
        author={comment_element.author}
        text={comment_element.text}
        date={comment_element.date}
      />
    </div>
  );
}

export default App;
