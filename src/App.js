import React from 'react';
import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';

const App = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <FormContainer />
        <ListContainer />
      </div>
    </div>
  );
};

export default App;
