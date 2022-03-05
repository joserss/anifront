import './App.css';
import Search from './components/Search';
import { useState, useEffect } from 'react'
import searchService from './services/search';
import InfoCard from './components/InfoCard';
import 'bulma/css/bulma.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


const App = () => {
  const [ toggle, setToggle ] = useState(false)
  const [ toggleLoad, setToggleLoad ] = useState(false)
  const [ query, setQuery ] = useState("")
  const [results, setResults] = useState(
    [
      // {
      //   "title.romaji": "Mix",
      //   "id": 103555,
      //   "compa": 1.0
      // },
      // {
      //   "title.romaji": "Major 2nd Season 2",
      //   "id": 112302,
      //   "compa": 0.8136652737
      // },
      // {
      //   "title.romaji": "Major 2nd",
      //   "id": 100306,
      //   "compa": 0.8105891857
      // }
    ])



  const handleClick = async (event) => {
    setToggleLoad(true)
    event.preventDefault()
    const searchObject = {
      title: query,
    }

    try {
      const response = await searchService.search(searchObject)
      setResults(response.data)
      setToggle(true)
    } catch (exception) {
      alert("Title not in library. Try a different one.")
      setQuery("")
    }
    setToggleLoad(false)
    // const cosita = await searchService.search(searchObject)
    // setResults(cosita.data)
    // searchService
    //   .search(searchObject)
    //   .then(response => {
    //     console.log(response.data)
    //     setResults([...response.data])
    //     //setQuery('')
    //   })

    console.log('button clicked', event.target)
    //setResults([...results ,query])
    // setToggleLoad(false)
    // setToggle(true)
    // setQuery("")
  }
  
  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  const handleReset = () => {
    setQuery("")
    setToggle(false)
    setResults([])
  }

  const SubHeader = ({title}) => { return(
    <div class="is-flex is-justify-content-space-around is-align-items-center" >
      <p>
        Results for <strong>{title}</strong>:
      </p>
      <button class="button is-warning" onClick={handleReset}>Reset</button>
    
    </div>



  )}

  const Loading = () => <progress class="progress is-small is-primary" max="100">15%</progress>


  
  return (
    <div class="is-flex is-flex-direction-column is-justify-content-space-around" style={{minHeight: "95vh"}}> 
      <div style={{"flex": "1"}}>
        <NavBar />
        <div  class="container pb-2">
          {!toggle && <Search query={query} handleQuery={handleQuery} onClick = {handleClick}/> }
          {toggle && <SubHeader title={query}/>}
          
        </div>
        <div  class="container px-2">
        
          {toggleLoad && <Loading />}
          {results.map(media => 
            <InfoCard title={media["title.romaji"]} compa={media.compa} id={media["id"]} key={media["title.romaji"]}/>
          )}
        </div>
      </div>
        
    <Footer />
    </div>
  )
}

export default App
