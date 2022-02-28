import './App.css';
import Search from './components/Search';
import { useState, useEffect } from 'react'
import searchService from './services/search';
import InfoCard from './components/InfoCard';

const App = () => {
  const [ query, setQuery ] = useState("")
  const [results, setResults] = useState(
    [
      {
        "title.romaji": "Mix",
        "id": 103555,
        "compa": 1.0
      },
      {
        "title.romaji": "Major 2nd Season 2",
        "id": 112302,
        "compa": 0.8136652737
      },
      {
        "title.romaji": "Major 2nd",
        "id": 100306,
        "compa": 0.8105891857
      }
    ])



  const handleClick = (event) => {
    event.preventDefault()
    const searchObject = {
      title: query,
    }

    searchService
      .search(searchObject)
      .then(response => {
        console.log(response.data)
        //setResults([...response.data])
        //setQuery('')
      })

    console.log('button clicked', event.target)
    //setResults([...results ,query])
    setQuery("")
  }
  
  const handleQuery = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }




  
  return (
    <div>
      <p>Hello world</p>
      <Search query={query} handleQuery={handleQuery} onClick = {handleClick}/>
        {results.map(media => 
          <InfoCard title={media["title.romaji"]} compa={media.compa} id={media["id"]} key={media["title.romaji"]}/>
        )}

    </div>
  )
}

export default App
