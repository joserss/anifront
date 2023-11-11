import React from "react"
import "bulma/css/bulma.min.css"


const Footer = () => { return (
	<footer className="footer">
		<div className="content has-text-centered">
			<div>
				<p>
					<strong>Hagumi</strong><br/>
				</p>
				<div className="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">				
					<div className="mx-1">
						Made with <a  href="https://reactjs.org/">React</a> and <a  href="https://bulma.io">Bulma</a>. 
					</div>
					{/* <div className="mx-1"> 
						Styled with <a  href="https://bulma.io">Bulma</a>. 
					</div> */}
					<div className="mx-1">Powered by <a  href="https://anilist.co">Anilist.</a>. 
					</div>
				</div>
			</div>
		</div>
	</footer>



)}

export default Footer

