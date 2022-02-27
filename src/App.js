import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { useState } from 'react'
import searchService from './services/search';


const App = () => {
  const [ query, setQuery ] = useState("")
  const [results, setResults] = useState([])


  const handleClick = (event) => {
    event.preventDefault()
    const searchObject = {
      title: query,
    }

    searchService
      .search(searchObject)
      .then(response => {
        console.log(response.data.data)
        setResults([...response.data.data])
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
      <img src={logo} className="App-logo" alt="logo" />
      <Search query={query} handleQuery={handleQuery} onClick = {handleClick}/>
      <ul>
        {results.map(note => 
          <li key={note}>
            {note}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
