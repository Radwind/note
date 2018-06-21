import Store from 'store';

export function createNote(note) {
  let key = 'note' + note.id;
  return Store.set(note, key);
}

export function getNotes() {
  const arr = [];
  Store.each((value, key) => {
    if (key.substring(0, 4) === 'note') {
      arr.push(value);
    }
  });
  return arr;
}

export function deleteNote(id) {
  Store.each((value, key) => {
    if (+key.slice(4, key.length) === id) {
      return Store.remove(key);
    }
  });
}

export function editNote(id, title, text) {
  Store.each((value, key) => {
    if (+key.slice(4, key.length) === id) {
      let note = Store.get(key);
      if (title) {
        note.title = title;
      }
      if (text) {
        note.text = text;
      }
      return Store.set(key, note);
    }
  });
}

export function createComments(id, comment) {
  Store.each((value, key) => {
    if (+key.slice(4, key.length) === id) {
      let note = Store.get(key);
      note.comments.push(comment);
      return Store.set(note, key);
    }
  });
}

export function getComments(id) {
  Store.each((value, key) => {
    if (+key.slice(4, key.length) === id) {
      let note = Store.get(key);
      let comments = note.comments;
      return comments;
    }
  })
}