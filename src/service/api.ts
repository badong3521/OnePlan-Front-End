import apisauce from 'apisauce';
import { DEFAULT_API } from '../utils/constants';
import { load } from '../utils/storage';
import { Account } from '../utils/Account';
import ListTask from '../utils/ListTask';
import AddTask from '../utils/AddTask';

const api = apisauce.create({
  baseURL: DEFAULT_API,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  // },
  timeout: 10000,
});

function CreateApi() {
  function signIn(body: Account) {
    console.log('BODY', body);
    console.log('API LOGIN', load('token'));

    const response = api.post<any>('gettoken', body);
    return response;
  }

  function getListTask(body: ListTask) {
    const response = api.post<any>('list_task', body, {});
    return response;
  }

  function addTask(body: AddTask) {
    const response = api.post<any>('add_task', body, {});
    return response;
  }

  function startTimeTask(body) {
    const response = api.post<any>('clock', body, {});
    return response;
  }

  return { signIn, getListTask, addTask, startTimeTask };
}
export default CreateApi;
