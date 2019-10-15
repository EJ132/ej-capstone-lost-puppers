import TokenService from './token-service';
import config from '../config'

const PupApiService = {
  getpups() {
    return fetch(`${config.API_ENDPOINT}/pups`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPup(pupId) {
    return fetch(`${config.API_ENDPOINT}/pups/${pupId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPupDetails(pupId) {
    return fetch(`${config.API_ENDPOINT}/pups/${pupId}/details`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postDetails(pupId, text) {
    return fetch(`${config.API_ENDPOINT}/pups`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        Pup_id: pupId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default PupApiService
