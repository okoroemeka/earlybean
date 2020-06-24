import {types} from '../types';

const initialState = {
  data: {},
  error: null,
};
const {
  authentication: {LOG_IN},
} = types;
const authenticationReducer = ({
  state = initialState,
  action: {type, data},
}) => {
  switch (type) {
    case LOG_IN.SUCCESS:
      return state;
    case LOG_IN.ERROR:
      return {...state, error: data.error};
    default:
      return state;
  }
};

export default authenticationReducer;
