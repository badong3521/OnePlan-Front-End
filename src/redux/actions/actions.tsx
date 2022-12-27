import {  USER } from '../constants/constants';

export const getUserInfo = (user) => {
  console.log('USER', user);
  return {
    type: USER,
    payload: user,
  };
};
