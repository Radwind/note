import moment from 'moment';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ADD_COMMENT = 'ADD_COMMENT';

let nextId = 0;
export const addNote = (title, text) => ({
  type: ADD_NOTE,
  title,
  text,
  id: nextId++,
  comments: []
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id
});

export const editNote = (id, title, text) => ({
  type: EDIT_NOTE,
  title,
  text,
  id
});

let comId = 80000;
export const addComment = (id, author, comment) => ({
  type: ADD_COMMENT,
  cId: comId++,
  author,
  comment,
  date: moment().format('DD-MM-YYYY HH:mm:ss'),
  id
});
