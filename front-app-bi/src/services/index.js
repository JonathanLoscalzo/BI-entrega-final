import axios from 'axios';
import { URL } from '../constants';
import sleep from '../helpers/timeout'

export const mainService = {
  startProcess: idProcess =>
    axios({
      method: 'POST',
      url: `${URL}/api/process`,
      data: {
        processDefinitionId: idProcess
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.data.id),
  getPullData: async idCase =>
    await streamRequest(idCase)
      .catch(async err => {
        await sleep(1000)
        return await mainService.getPullData(idCase)
      }),

  getPullSubmitOrder: async idCase =>
    await streamRequestSubmitorder(idCase)
      .catch(async err => {
        await sleep(1000)
        return await mainService.getPullSubmitOrder(idCase)
      })
};

const streamRequest = idCase =>
  axios({
    method: 'GET',
    url: `http://events.supermarket-dssd.ml/streams/${idCase}/0`,
    headers: {
      Accept: 'application/vnd.eventstore.atom+json'
    }
  }).then(response => response.data.content.data);
const streamRequestSubmitorder = idCase =>
  axios({
    method: 'GET',
    url: `http://events.supermarket-dssd.ml/streams/${idCase}/0`,
    headers: {
      Accept: 'application/vnd.eventstore.atom+json'
    }
  }).then(response => response.data.content);
