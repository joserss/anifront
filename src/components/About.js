import React from "react"

const AboutPage = ({handleReset}) => {
	return(
		<div className="container px-2  is-flex  is-justify-content-center is-flex-direction-column is-align-items-center" >
			<div  className="py-2  is-flex  is-justify-content-space-evenly is-flex-direction-column is-align-items-center">

			
				<div>
					Hagumi is an anime recommendation sistem. <br/>
				</div>
				<div> 
						More information can be found in the <a href="https://github.com/joserss/anime-recommendation">project&apos;s repository.</a>				
				</div>
			</div>
			<div style={{width: "90%" }}>
				<button className="button is-warning" onClick={handleReset} style={{width: "100%" }} >Return</button>

			</div>
			
		</div>


	)

}




export default AboutPage