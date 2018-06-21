import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBWIs4Lehe5FzvBjoR6-NG1FxSR2YnEZ08",
  authDomain: "test-note-app.firebaseapp.com",
  databaseURL: "https://test-note-app.firebaseio.com",
  projectId: "test-note-app",
  storageBucket: "test-note-app.appspot.com",
  messagingSenderId: "163757101333"
};
firebase.initializeApp(config);
const database = firebase.database();

export function createNote(note) {
  return database
    .ref('note')
    .push(note);
}

export function getNotes() {
  return database
    .ref('notes')
    .on('value', (snapshot) => snapshot.val());
}

export function deleteNote(id) {
  return database
    .ref('/notes/' + id)
    .remove();
}

export function editNote(id, title, text) {
  const data = {};
  if (title) {
    data.title = title;
  }
  if (text) {
    data.text = text;
  }
  return database
    .ref('/notes/' + id)
    .update(data);
}

export function createComment(id, comment) {
  return database
    .ref('/notes/' + id + '/comments')
    .push(comment);
}

export function getComments(id) {
  return database
    .ref('/notes/' + id + '/comments')
    .on('value', (snapshot) => snapshot.val());
}
