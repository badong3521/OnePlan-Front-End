import apisauce from 'apisauce';
import { DEFAULT_API } from '../utils/constants';

const api = apisauce.create({
  baseURL: DEFAULT_API,
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  // },
  timeout: 10000,
});

function CreateApi() {
  function signIn(body) {
    console.log('BODY', body);
    const response = api.post<any>('gettoken', body);
    return response;
  }

  function getListTask(body) {
    const response = api.post<any>('list_task', body, {
      headers: {
        Authorization: `Bearer ${''}`,
      },
    });
    return response;
  }

  function addTask(body) {
    const response = api.post<any>('add_task', body, {
      headers: {
        Authorization: `Bearer ${''}`,
      },
    });
    return response;
  }

  function startTimeTask(body) {
    const response = api.post<any>('clock', body, {
      headers: {
        Authorization: `Bearer ${''}`,
      },
    });
    return response;
  }

  return { signIn, getListTask, addTask, startTimeTask };
}
export default CreateApi;
