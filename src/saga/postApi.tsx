import { api } from '../service';
import { Account } from '../utils/Account';

async function getAPIUserInfo(values : Account) {
   return await api.signIn(values)
}

export { getAPIUserInfo };