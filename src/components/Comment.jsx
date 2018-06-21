import React from 'react';
import '../style/Comment.css'

const Comment = (props) => {
  const {author, comment, date } = props;
  return (
    <li className="comment">
      <div><strong>{author}</strong>: {comment}</div> <div id="date">{date}</div>
    </li>
  );
};

export default Comment;