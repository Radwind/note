import React from 'react';
import Note from './Note';

const ListBox = (props) => {
  return (
    <div className="col-sm-10 col-md-8 offset-md-4">
      <div className="row">
        {props.notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            text={note.text}
            id={note.id}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            onAddComment={props.onAddComment}
            comments={note.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default ListBox;
