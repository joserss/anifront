import React from "react"

const SearchItem = ({item, onClick}) => {

	const Image = () => { return (
	// <figure class="py-0" >        
		<img className="image is-3by4"  src={item.coverImage.large} alt="Cover"  style={{width:"5em",
			margin:0,
			padding: 0,
			borderRadius:8}}  />        
	// </figure>
	)}   
        
	const Info = () => {return (
		<>
			<h1 className="title is-4">{item.title.romaji} </h1> 
			<p>{item.seasonYear}</p>
			<p>Rating: {item.averageScore}%</p>
		</> 
	)}
    
	return(
		<div  className="box is-flex is-flex-direction-row m-2 p-2 is-align-items-center"   style={{backgroundColor: item.coverImage.color + "50"}} onClick={() => onClick(item.title.romaji)} >
			< div className="p-0 m-0"> 
				<Image />
			</div>
			<div className="container px-2"  style={{"flex":1}} >
				<Info />
			</div>
		</div >
	)
}

  
export default SearchItem