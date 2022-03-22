import React from "react"

const SubHeader = ({title, handleReset}) => { return(
	<div className="is-flex is-justify-content-space-around is-align-items-center is-flex-wrap-wrap-reverse " >
		<div className="py-2 px-3 has-text-centered"  >
			<div className="has-text-centered" >

			
				<div>
					Recommendations for 
				</div>
				<div >
					<strong>{title}</strong>
					
				</div>
			</div>
			
		</div>
		<div>
			<button className="button is-warning" onClick={handleReset}>Reset</button>

		</div>
		

	</div>



)}












export default SubHeader