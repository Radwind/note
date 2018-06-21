import * as firebase from './firebase';
import * as localStorage from './localStorage';

function service(option) {
  switch (option) {
    case 'firebase':
    console.log(firebase);
      return firebase;

    case 'localStorage':
    console.log(localStorage);
      return localStorage;

    default:
      return 'No options';
  }
}

export default service;

