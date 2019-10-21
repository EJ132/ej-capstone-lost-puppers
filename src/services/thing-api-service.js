import TokenService from './token-service';
import config from '../config'

const PupApiService = {
  getpups() {
    return fetch(`${config.API_ENDPOINT}/pups`, {
      headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},})
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
  getProfile(){
    return fetch(`${config.API_ENDPOINT}/profile/${TokenService.getUserName()}`, {
      headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},})
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
  },
  deletePup(cardId){
    return fetch(`${config.API_ENDPOINT}/pups/${cardId}`, {
      method: 'DELETE',
      headers: { 'authorization': `bearer ${TokenService.getAuthToken()}`}
      })
  },
  getPupCard(param){
   return fetch(`${config.API_ENDPOINT}/pups/${param}`, {
      headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},
    })
    .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
  },
  getPupComments(param){
    return fetch(`${config.API_ENDPOINT}/pups/${param}/comments`, {
      headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},
      })
      .then(res => 
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  editPupComment(param, values){
    return fetch(`${config.API_ENDPOINT}/pups/${param}`, {
      headers: {'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json' },
      method: 'PATCH',
      body: values,
      })
      .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      )
  },
}

export default PupApiService
