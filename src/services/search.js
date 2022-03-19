import axios from "axios"

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT


const baseUrl = `${API_ENDPOINT}` + "/api/search"



const search = newObject => {
	return axios.put(baseUrl, newObject)
}

const searchService = { 
	search: search
}

export default searchService