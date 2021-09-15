import axios from 'axios'

const baseUrl = '/api/persons'
//const baseUrl = 'https://puhluetbckend.herokuapp.com/api/persons'

// Noutaa koko tietokannan
const getAll = () => {
  console.log("Get All")
  // axios.get palauttaa promisen (request), se edustaa asynkronista operaatiota ja voi olla kolmessa eri tilassa.
  const request = axios.get(baseUrl)
  // Ei palauteta promisea request. Vaan 
  return request.then(response => response.data)
}

const deletePerson = person => {
  console.log("Delete person from db", person.name,)
  const request = axios.delete(`${baseUrl}/${person.id}`)
  return request.then(response => response.data)
}

// Luo koko tietokannan 
const create = newObject => {
  console.log("Create new db record ", newObject)
  // Promise-oliota ei ole yleensä tarvetta tallettaa muuttujaan, 
  // ja onkin tapana ketjuttaa metodin then kutsu suoraan axiosin metodin kutsun perään:
  //const request = axios.post(baseUrl, newObject)
  return axios.post(baseUrl, newObject).then(response =>  response.data)
  //return request.then(response =>  response.data)
}

// Päivittää olemassa olevan tietueen
const update = (id, newObject) => {
  console.log("Update db record:" + id, newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, deletePerson }