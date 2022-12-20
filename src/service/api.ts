import apisauce from 'apisauce';
import { DEFAULT_API } from '../utils/constants';
// import { load } from '../utils/storage';
import { Account } from '../utils/Account';
import ListTask from '../utils/ListTask';
import AddTask from '../utils/AddTask';

const api = apisauce.create({
  baseURL: DEFAULT_API,
  headers: {
    Authorization: `e1fb37ddd3255539c30ba84cdd53a4dce0e70dbdfe060838f8aa95206feff381`,
    User_ID: 1,
  },
  timeout: 10000,
});

function CreateApi() {
  function signIn(body: Account) {
    console.log('BODY', body);
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
