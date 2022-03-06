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
import React from "react"


const App = () => {
	const [ toggle, setToggle ] = useState(true)
	const [getSearchResults, { called, loading, error, data }] = useLazyQuery(SEARCH)
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
			setPage("Search")
		}
	}, [data])

	const handleSearch = (event) => {
		setPage("Load")
		event.preventDefault()
		console.log("button clicked")
		// setToggle(false)
		getSearchResults({ variables: {
			mediaToSearch: query
		} })
		console.log(query)
	}

	const handleClick = async (title) => {
		setPage("Load")
		// event.preventDefault()
		const searchObject = {
			title: title,
		}

		try {
			const response = await searchService.search(searchObject)
			setResults(response.data)
			setToggle(false)
			setPage("Rec")
			setQuery(title)
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

	const SubHeader = ({title}) => { return(
		<div className="is-flex is-justify-content-space-around is-align-items-center" >
			<p>
        Recommendations for <strong>{title}</strong>
			</p>
			<button className="button is-warning" onClick={handleReset}>Reset</button>
    
		</div>



	)}

	const Loading = () => <progress className="progress is-small is-primary" max="100">15%</progress>



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
			return null
		} else if (page === "Search") {
			console.log("search")
			return null
		} else if (page === "Rec") {
			console.log("rec")
			return null
		}
	}





	return (
		<div className="is-flex is-flex-direction-column is-justify-content-space-around" style={{minHeight: "95vh"}}> 
			<div style={{"flex": "1"}}>
				<NavBar />
				<div  className="container pb-2">
					{toggle && <Search query={query} handleQuery={handleQuery} onClick = {handleSearch}/> }
					{!toggle && <SubHeader title={query}/>}
        
				</div>
				<div  className="container px-2 is-align-items-center is-flex is-flex-direction-column">

					{content()}
					{(page === "Load") && <Loading />}
       
					{(page === "Rec") && results.map(media => 
						<InfoCard title={media["title.romaji"]} compa={media.compa} id={media["id"]} key={media["title.romaji"]}/>
					)}
        
					<div className="container">
						{ (page === "Search") && searchResults.map(media =>
          
							<SearchItem item={media} onClick={(message) => handleClick(message)}  key={media.id}/>
          
						)}
					</div>
					{(page === "Rec") && <button className="button is-warning" onClick={handleReset}>Reset</button>}
				</div>
			</div>
      
			<Footer />
		</div>
	)
}

export default App
