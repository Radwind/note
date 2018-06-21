import React from 'react';
import '../style/HeaderBtns.css';

const HeaderButtons = (props) => {
  return (
    <div className="buttons">
      <button onClick={props.Edit} className="btn btn-info">
        <i className="fas fa-edit" />
      </button>
      <button onClick={props.Delete} className="btn btn-danger">
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

export default HeaderButtons;
