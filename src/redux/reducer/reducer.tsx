import { USER, USER_SUCCESS } from '../constants/constants';
import { load } from '../../utils/storage';

const users = load('users');

const INITIAL_STATE = {
  ID: users?.ID,
  display_name: users?.display_name,
  user_activation_key: users?.user_activation_key,
  user_email: users?.user_email,
  user_login: users?.user_login,
  user_nicename: users?.user_nicename,
  user_pass: users?.user_pass,
  user_registered: users?.user_registered,
  user_status: users?.user_status,
  user_url: users?.user_url,
  accessToken: users?.accessToken,
  loading: true,
};

const myReducer = (state = INITIAL_STATE, action) => {
  console.log('ACTION', action);
  switch (action.type) {
    case USER:
      return {
        ...state,
      };
    case USER_SUCCESS:
      console.log('ACTIONS', action.payload);
      const token = action.payload.token;
      return {
        ...state,
        ID: action.payload.user.ID,
        display_name: action.payload.user.display_name,
        user_activation_key: action.payload.user.user_activation_key,
        user_email: action.payload.user.user_email,
        user_login: action.payload.user.user_login,
        user_nicename: action.payload.user.user_nicename,
        user_pass: action.payload.user.user_pass,
        user_registered: action.payload.user.user_registered,
        user_status: action.payload.user.user_status,
        user_url: action.payload.user.user_url,
        accessToken: token,
        loading: false,
      };

    default:
      return state;
  }
};

export default myReducer;
