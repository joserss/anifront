import InfoCard from "./InfoCard"
import SubHeader from "./SubHeader"
import React from "react"

export const RecResults = ({ query, handleReset, results, handleClick }) => {
	return (
		<>
			<div className="container pb-2 is-flex  is-flex-direction-column is-justify-content-center  " style={{ "flex": "0 1 auto", width: "100%" }}>
				<SubHeader title={query} handleReset={handleReset} />
			</div>
			<div className="container px-2 is-align-items-center is-flex is-flex-direction-column" style={{ "flex": "1", width: "100%" }}>
				{results.map(media =>
					// <InfoCard title={media["title.romaji"]} compa={media.compa} id={media["mediaId"]} key={media["title.romaji"]} handleRecBut={(title, id) => handleClick(title, id)}/>
					<InfoCard id={media} key={media} handleRecBut={(title, id) => handleClick(title, id)} />
				)}
				<button className="button is-warning" onClick={handleReset}>Reset</button>
			</div>
		</>

	)
}

export default RecResults