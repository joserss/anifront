import React from "react"


const Search = ({query, handleQuery, onClick}) => {
	return (
		<div className="box">
			<form onSubmit={onClick} className=" is-flex is-flex-direction-row">
				<input className="input"
					value={query}
					onChange={handleQuery}
					placeholder="Search Anime"
				/>
				<button className="button" type="submit">Search</button>
			</form>   
		</div>
	)
}

export default Search