import axios from 'axios'

const baseUrl = '/api'

export function getWords(postData){
  return axios.post(`${baseUrl}/text`, postData )
}