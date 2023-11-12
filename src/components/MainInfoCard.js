/* eslint-disable no-unused-vars */
import React from "react"
import { useQuery } from "@apollo/client"
import { DETAILS } from "../graphql/queries"
// import logo from "../logo.svg"
import { useMediaQuery } from "react-responsive"
import "bulma/css/bulma.min.css"

const MainInfoCard = ({id, handleRecBut, handleReset}) => {
	const { loading, error, data } = useQuery(DETAILS, {
		variables: { animeId: id },
	})
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)"
	})
	// console.log(isDesktopOrLaptop)




	// console.log(title,id)

	if (loading) {
		return (
			<div className="box" style={{backgroundColor: "#D4EDF7" + "50", width:"100%"}}>
				{/* <h1 className="title is-4">{title} </h1> */}
				<progress className="progress is-small is-primary" max="100">15%</progress>
			</div>
		)
	}
    
	// if (error) {
	//     console.log("error", error);

	//     return (
	//         <div>
	//             Error
	//         </div>
	//     );
	// }

	
    
	const media = data.Media

	const media2 = {
		"averageScore": 68,
		"bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103555-BvElzwYrkBPt.jpg",
		"title": {
			"romaji": "Mix",
			"english": "MIX"
		},
		"format": "TV",
		"id": 103555,
		"type": "ANIME",
		"season": "SPRING",
		"seasonYear": 2019,
		"description": "“MIX” takes place 26 years from the story “TOUCH”. From the legend left by the hero of “TOUCH”, Tatsuya Uesugi, Meisei Academy High School was well known for their strong baseball team. 26 years from their glory, the team has not been able to keep their record and lost their fame.\n\n“MIX” is about two stepbrothers, Soichiro and Toma Tachibana. The two aim to revive of the once strong Meisei Academy’s baseball team and enter the National High School Baseball Championship.\n\nSoichiro and Toma were second years in Meisei Academy Middle School. Both boys are talented baseball players. Soichiro has shown excellent skill as a catcher and batter. Though having an extraordinary skill as a pitcher, Toma no longer pitches due to a “certain reason.”\n\nOnce the two enter High School, they pair as a battery and aim to enter the National High School Baseball Championship!\n\nThe passion and devoted emotions will touch your heart! “MIX” is an high school baseball drama that all ages and genders can enjoy!\n\n[Source: ytv; emended]",
		"status": "FINISHED",
		"isFavourite": false,
		"episodes": 24,
		"volumes": null,
		"coverImage": {
			"large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103555-YMLK0Feq3DmS.jpg",
			"color": "#93d65d"
		},
		"studios": {
			"nodes": [
				{
					"id": 28,
					"name": "OLM"
				}
			]
		},
		"mediaListEntry": null,
		"stats": {
			"statusDistribution": [
				{
					"status": "CURRENT",
					"amount": 553
				},
				{
					"status": "PLANNING",
					"amount": 1829
				},
				{
					"status": "COMPLETED",
					"amount": 2049
				},
				{
					"status": "DROPPED",
					"amount": 538
				},
				{
					"status": "PAUSED",
					"amount": 319
				}
			],
			"scoreDistribution": [
				{
					"score": 10,
					"amount": 11
				},
				{
					"score": 20,
					"amount": 9
				},
				{
					"score": 30,
					"amount": 37
				},
				{
					"score": 40,
					"amount": 51
				},
				{
					"score": 50,
					"amount": 170
				},
				{
					"score": 60,
					"amount": 287
				},
				{
					"score": 70,
					"amount": 535
				},
				{
					"score": 80,
					"amount": 423
				},
				{
					"score": 90,
					"amount": 181
				},
				{
					"score": 100,
					"amount": 66
				}
			]
		},
		"relations": {
			"edges": [
				{
					"relationType": "PREQUEL",
					"node": {
						"id": 1539,
						"status": "FINISHED",
						"title": {
							"romaji": "Touch: Cross Road - Kaze no Yukue"
						},
						"format": "SPECIAL",
						"coverImage": {
							"large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1539.jpg"
						}
					}
				},
				{
					"relationType": "ADAPTATION",
					"node": {
						"id": 67815,
						"status": "RELEASING",
						"title": {
							"romaji": "Mix"
						},
						"format": "MANGA",
						"coverImage": {
							"large": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx67815-l9NLq2KjOBSd.jpg"
						}
					}
				}
			]
		},
		"characters": {
			"nodes": [
				{
					"id": 66349,
					"image": {
						"large": "https://s4.anilist.co/file/anilistcdn/character/large/66349.jpg"
					},
					"name": {
						"full": "Souichirou Tachibana"
					}
				},
				{
					"id": 66347,
					"image": {
						"large": "https://s4.anilist.co/file/anilistcdn/character/large/66347.jpg"
					},
					"name": {
						"full": "Touma Tachibana"
					}
				},
				{
					"id": 66351,
					"image": {
						"large": "https://s4.anilist.co/file/anilistcdn/character/large/66351.jpg"
					},
					"name": {
						"full": "Otomi Tachibana"
					}
				}
			]
		}
	}
	const title = media.title.romaji
	const backColor = media.coverImage.color ? media.coverImage.color : "#D4EDF7"

	// console.log("color ", backColor)
	// const media = media2
	// console.table(media)

    
	const mainBox = {
        
		borderStyle: "solid",
		display: "flex",
		backgroundColor: media.coverImage.color,
		margin: "0 auto",
		padding:10,
		alignItems: "center",
		width:"90vw",
		flexDirection: isDesktopOrLaptop ? "row" : "column"
	}

	const header = {
		color: "red",
		justifyContent: "center",

	}

	const textBox = {
		color:"gray",
		margin:5,
		padding:10,
		backgroundColor: media.coverImage.color + "30",
		// fontSize: isDesktopOrLaptop ? 16 : 14,
		borderRadius:3,
		width:"100%"
	}

	const cover = {
		// width: isDesktopOrLaptop ? "5" : "5",
		width: isDesktopOrLaptop ? "10em" : "8em",
		// margin:3,
		// padding: 1,
		borderRadius:10
	}

	const titleStyle = {
		color: "black",
		padding: 1,
		fontStyle: "italic",
		margin: "0 auto"
	}


	const Image = () => { return (
		<figure  >        
			<img   src={media.coverImage.large} alt="Cover" style={cover} />        
		</figure>
      




	)}
    
    
	const Info = () => {return (
		<>
			<h1 className="title is-4">{title} </h1> 
			{/* <p>Compatibility: {compa.toFixed(2)*100}%</p> */}
			<p>{media.seasonYear}</p>
			<p>{media.format}</p>
			<p>Rating: {media.averageScore}%</p>
			<div className="tags">
				{media.genres.map(genre => <span className="tag" style={{backgroundColor: backColor + "90"}} key={genre}>{genre}</span>
				)}
			</div>
		</> 
	)}

	const TextBox = () => {
		return(
			<div style={textBox}>
				<p>{media.description.replace( /(<([^>]+)>)/ig, "")}</p>
			</div>

		)
	}

	const Mobile = () => {
		return(
			<>
				<div  className="is-flex is-flex-direction-row"   >
					< div className="m-1" style={{}}> 
						<Image />
					</div>
					<div className="container px-2"  style={{"flex":1}} >
						<Info />
					</div>
				</div >
				<div className="block is-flex is-flex-direction-column  is-align-items-center ">
					{media.description ? <TextBox /> : null}
					<div className="buttons  is-flex  is-justify-content-center">
						<a className="button is-link " target="_blank" rel="noreferrer" href={"https://anilist.co/anime/" + id}>See more on Anilist</a>
						{/* <button className="button is-info " onClick={() => handleRecBut(title, id)}>See recommendations for this title---</button> */}
						<button className="button is-warning" onClick={handleReset}>Reset</button>
					</div>
					
				</div>
              
                
			</>


		)
	}


	return (
		<div className="box" style={{backgroundColor: backColor + "50", width:"100%"}} >
			<Mobile />
                  
		</div>
	)
}

export default MainInfoCard