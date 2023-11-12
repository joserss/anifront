/* eslint-disable no-unused-vars */
import InfoCard from "./InfoCard"
import SubHeader from "./SubHeader"
import MainInfoCard from "./MainInfoCard"
import React from "react"

export const RecResults = ({ query_object, handleReset, results, handleClick }) => {
	const item_id = query_object.mediaId
	const item_title = query_object["title.romaji"]
	return (
		<>
			{/* <div className="container pb-2 is-flex  is-flex-direction-column is-justify-content-center  " style={{ "flex": "0 1 auto", width: "100%" }}>
				<SubHeader title={item_title} handleReset={handleReset} />
			</div> */}

			<div className="container py-2">
				<MainInfoCard id={item_id} handleRecBut={(item_title, item_id) => handleClick(item_title, item_id)} handleReset={handleReset}/>
			</div>			

			<div className="container is-align-items-center is-flex is-flex-direction-column" style={{ "flex": "1", width: "70%" }}>
				<h1 className="title mt-5">Recommended Titles</h1>


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