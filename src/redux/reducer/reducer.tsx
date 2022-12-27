import { USER, USER_SUCCESS } from '../constants/constants';

const INITIAL_STATE = {
  ID: '',
  display_name: '',
  user_activation_key: '',
  user_email: '',
  user_login: '',
  user_nicename: '',
  user_pass: '',
  user_registered: '',
  user_status: '',
  user_url: '',
  loading: null,
};

const myReducer = (state = INITIAL_STATE, action) => {
  console.log('ACTION', action);
  switch (action.type) {
    case USER:
      return {
        ...state,
      };
    case USER_SUCCESS:
      return {
        ...state,
        ID: action.payload.user.ID,
        display_name: action.payload.user.display_name,
        user_activation_key: '',
        user_email: '',
        user_login: '',
        user_nicename: '',
        user_pass: '',
        user_registered: '',
        user_status: '',
        user_url: '',
        loading: false,
      };

    default:
      return state;
  }
};

export default myReducer;
