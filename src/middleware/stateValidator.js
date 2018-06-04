import tv4 from 'tv4';
import stateSchema from './stateSchema';

// function ({dispach}) {
//   return funcion(next) {
//     return function(action) {
//
//     }
//   }
// }
export default ({ dispach, getState }) => next => action => {
  next(action);

  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('NG-AW: Invalid state schema detected');
  }
};
