import { USER } from '../constants/constants';
import { Account } from '../../utils/Account';

export const getUserInfo = (user: Account) => {
  return {
    type: USER,
    payload: user,
  };
};
