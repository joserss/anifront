import axios from 'axios'
const baseUrl = 'http://localhost:5000/search'


const search = newObject => {
  return axios.put(baseUrl, newObject)
}

const searchService = { 
    search: search
  }

export default searchService