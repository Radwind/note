import React from 'react';
import Comment from './Comment';

const CommentsList = (props) => {
  return (
    <ul className="comments-list">
      {props.comments.map((com) => (
        <Comment
          key={com.cId}
          author={com.author}
          comment={com.comment}
          date={com.date}
        />
      ))}
    </ul>
  );
};

export default CommentsList;
