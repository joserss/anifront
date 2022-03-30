/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css"
import Search from "./components/Search"
import { useState, useEffect } from "react"
import searchService from "./services/search"
import InfoCard from "./components/InfoCard"
import "bulma/css/bulma.min.css"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { useLazyQuery } from "@apollo/client"
import { SEARCH } from "./graphql/queries"
import SearchItem from "./components/SearchItem"
import SubHeader from "./components/SubHeader"
import React from "react"
import AboutPage from "./components/About"
const jsonData= require("./data/infoComplete_json.json")




const HomePage = ({query, handleQuery, handleSearch, page}) => {
	console.log("Titles in the database:", jsonData.length )
	return(
		<div  className="container pb-2 is-flex  is-flex-direction-column is-justify-content-center  " style={{"flex": "0 1 auto", width:"100%"}}>			
			<Search query={query} handleQuery={handleQuery} onClick = {handleSearch}/> 
			{(page == "Load") && <Loading />}
		</div>
	)
}


const SearchResults = ({query, handleQuery, handleSearch, handleClick, searchResults}) => {
	const [ toggleL, setToggleL ] = useState(true)
	setTimeout(() => {
		setToggleL(false)
	}, 2000)
	return (
		<>
			<div  className="container pb-2 is-flex  is-flex-direction-column is-justify-content-center  " style={{"flex": "0 1 auto", width:"100%"}}>
				<Search query={query} handleQuery={handleQuery} onClick = {handleSearch}/> 
			</div>
			<div  className="container px-2 is-align-items-center is-flex is-flex-direction-column" style={{"flex": "1",  width:"100%"}}>
				{toggleL ? <Loading /> : searchResults.map(media =>          
					<SearchItem item={media} onClick={  (title, id) => handleClick(title, id)   }  key={media.id}/>
				)}
			</div>
		</>

	)
}

const RecResults = ({query, handleReset, results, handleClick}) => {
	return (
		<>
			<div  className="container pb-2 is-flex  is-flex-direction-column is-justify-content-center  " style={{"flex": "0 1 auto", width:"100%"}}>		
				<SubHeader title={query} handleReset={handleReset} />
			</div>
			<div  className="container px-2 is-align-items-center is-flex is-flex-direction-column" style={{"flex": "1",  width:"100%"}}>
				{results.map(media => 
				// <InfoCard title={media["title.romaji"]} compa={media.compa} id={media["mediaId"]} key={media["title.romaji"]} handleRecBut={(title, id) => handleClick(title, id)}/>
					<InfoCard id={media} key={media} handleRecBut={(title, id) => handleClick(title, id)}/>
				)}
				<button className="button is-warning" onClick={handleReset}>Reset</button>
			</div>
		</>

	)
}

const Loading = () => <progress className="progress is-small is-primary" max="100">15%</progress>




const App = () => {
	const [ toggle, setToggle ] = useState(true)
	const [getSearchResults, { called, loading, error, data ,variables}] = useLazyQuery(SEARCH, {
		fetchPolicy: "network-only"
	})
	const [ query, setQuery ] = useState("")
	const [ page, setPage ] = useState("Home")
	const [searchResults, setSearchResults] = useState([])
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
	

	useEffect(() => {
		if (data) {
			setSearchResults(data.Page.media)
			// setPage("Search")
			// setTimeout(() => {
			// 	setPage("Search")
			// }, 1)
			
			console.log(variables)
		}
	}, [data])

	const handleSearch = (event) => {
		setPage("Search")
		// setTimeout(() => {
		// 	setPage("Search")
		// }, 3000)
		// setPage("Load")
		event.preventDefault()
		console.log("button clicked")
		// setToggle(false)
		if (variables.mediaToSearch == query) {
			setSearchResults(data.Page.media)
			setPage("Search")
		} else {
			getSearchResults({ variables: {
				mediaToSearch: query
			} })
			console.log(query)

		}



	}

	const handleClick = (title,mediaId) =>{
		// setPage("Load")
		const idx = jsonData.findIndex(obj => obj.mediaId==mediaId)
		if (idx >0) {
			console.log(jsonData[idx])
			setQuery(title)
			setResults(jsonData[idx].Rec)
			setToggle(false)
			setPage("Rec")	
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})

		} else {
			alert("Title not in library. Try a different one.")
			setPage("Search")
		}
		
	}

	const handleClick2 = async (title, mediaId) => {
		setPage("Load")
		// event.preventDefault()
		const searchObject = {
			title: title,
			mediaId: mediaId
		}

		try {
			const response = await searchService.search(searchObject)
			setQuery(title)
			setResults(response.data)
			setToggle(false)
			setPage("Rec")			
		} catch (exception) {
			alert("Title not in library. Try a different one.")
			setPage("Search")
			// setQuery("")
		}
	}
  
	const handleQuery = (event) => {
		setQuery(event.target.value)
	}

	const handleReset = () => {
		setPage("Home")
		setSearchResults([])
		setQuery("")
		setToggle(true)
		setResults([])
    
    
	}




	// if (!called) return (
	// // return (
	// 	<div className="is-flex is-flex-direction-column is-justify-content-space-around" style={{minHeight: "95vh"}}> 
	// 		<div style={{"flex": "1"}}>
	// 			<NavBar />
	// 			<div  className="container pb-2">
	// 				{!toggle && <Search query={query} handleQuery={handleQuery} onClick = {handleSearch}/> }
	// 				{toggle && <SubHeader title={query}/>}
          
	// 			</div>
	// 			<div  className="container px-2 is-align-items-center is-flex is-flex-direction-column">
	// 				{(page === "Rec") && results.map(media => 
	// 					<InfoCard title={media["title.romaji"]} compa={media.compa} id={media["id"]} key={media["title.romaji"]}/>
	// 				)}
	// 				{toggle && <button className="button is-warning" onClick={handleReset}>Reset</button>}
	// 			</div>
	// 		</div>
        
	// 		<Footer />
	// 	</div>
	// )
  
	// if (called && loading) return (
	// 	<div className="is-flex is-flex-direction-column is-justify-content-space-around" style={{minHeight: "95vh"}}> 
	// 		<div style={{"flex": "1"}}>
	// 			<NavBar />
	// 			<div  className="container pb-2">
	// 				{!toggle && <Search query={query} handleQuery={handleQuery} onClick = {handleSearch}/> }
	// 				{toggle && <SubHeader title={query}/>}
          
	// 			</div>
	// 			<div  className="container px-2 is-align-items-center is-flex is-flex-direction-column">
	// 				<Loading />
	// 				{toggle && <button className="button is-warning" onClick={handleReset}>Reset</button>}
	// 			</div>
	// 		</div>
        
	// 		<Footer />
	// 	</div>
	// )

	// const searchResults = data.Page.media
	// console.log(loading, data, called)
	// console.log(searchResults)

	const content = () => {
		if (page === "Home") {
			console.log("home")
			return <HomePage query={query} handleQuery={handleQuery} handleSearch = {handleSearch} page={page} />
		} else if (page === "Search") {
			console.log("search")
			return <SearchResults query={query} handleQuery={handleQuery} handleSearch = {handleSearch} handleClick={handleClick} searchResults={searchResults} />
		} else if (page === "Rec") {
			console.log("rec")
			return <RecResults query={query} handleReset = {handleReset} handleClick={handleClick} results={results} />
		} else if (page === "About") {
			console.log("about")
			return <AboutPage handleReset={handleReset} />
		}
	}






	return (
		<div className="py-1 is-flex is-flex-direction-column is-justify-content-space-around" style={{minHeight: "100vh" }}> 
			<NavBar setPage={setPage} />
			<div className="p-1 is-flex is-flex-direction-column  is-justify-content-center" style={{"flex": "1", backgroundColor:"#ebffea"}}>
				{content()}
				
				{/* <div  className="container pb-2 is-flex  is-flex-direction-column is-justify-content-center  " style={{"flex": "0 1 auto", width:"100%"}}>
					{toggle && <Search query={query} handleQuery={handleQuery} onClick = {handleSearch}/> }
					{!toggle && <SubHeader title={query} handleReset={handleReset} />}
        
				</div>
				<div  className="container px-2 is-align-items-center is-flex is-flex-direction-column" style={{"flex": "1"}}>

					{content()}
					{(page === "Load") && <Loading />}
       
					{(page === "Rec") && results.map(media => 
						// <InfoCard title={media["title.romaji"]} compa={media.compa} id={media["mediaId"]} key={media["title.romaji"]} handleRecBut={(title, id) => handleClick(title, id)}/>
						<InfoCard id={media} key={media} handleRecBut={(title, id) => handleClick(title, id)}/>
					)}
        
					<div className="container">
						{ (page === "Search") && searchResults.map(media =>
          
							<SearchItem item={media} onClick={  (title, id) => handleClick(title, id)   }  key={media.id}/>
          
						)}
					</div>
					{(page === "Rec") && <button className="button is-warning" onClick={handleReset}>Reset</button>}
				</div> */}
			</div>
      
			<Footer />
		</div>
	)
}

export default App
