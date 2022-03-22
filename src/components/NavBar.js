/* eslint-disable no-unused-vars */
import React from "react"
import "bulma/css/bulma.min.css"
import logo from "../img/cover.png"
import logo2 from "../img/default-monochrome.svg"


const NavBar = () => {
	return (
		<nav className="navbar is-light" role="navigation" aria-label="main navigation">
			<div className="navbar-brand"> 
				<a className="navbar-item" href="">
					<img src={logo2} height="128" width="112"  />
				</a>
			</div>
		</nav>
	)
}

export default NavBar