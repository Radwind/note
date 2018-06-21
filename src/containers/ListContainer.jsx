import { connect } from 'react-redux';

import ListBox from '../components/ListBox';
import { deleteNote, editNote, addComment } from '../actions';

const mapStateToProps = (state) => ({
  notes: state
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteNote(id)),
  onEdit: (id, title, text) => dispatch(editNote(id, title, text)),
  onAddComment: (id, author, comment) => dispatch(addComment(id, author, comment))
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ListBox);

export default ListContainer;
