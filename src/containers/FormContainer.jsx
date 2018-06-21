import { connect } from 'react-redux';
import Form from '../components/Form';
import { addNote } from '../actions';


const mapDispatchToProps = (dispatch) => ({
  onAdd: (title, text) => {
    dispatch(addNote(title, text))
  }
});

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
