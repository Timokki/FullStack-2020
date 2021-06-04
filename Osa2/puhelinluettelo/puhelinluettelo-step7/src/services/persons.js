import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

// Noutaa koko tietokannan
const getAll = () => {
  console.log("Get All")
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// Luo koko tietokannan 
const create = (newObject) => {
  console.log("Create new db record ", newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Päivittää olemassa olevan tietueen
const update = (id, newObject) => {
  console.log("Update db record:" + id, newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update }