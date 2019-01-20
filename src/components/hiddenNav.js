import React from 'react'
import { Link } from "gatsby"




const ListLink = props => (  
	<li className="menu_item menu_mm">
		<Link className="m" to={props.to}>{props.children}</Link>
	</li>
)



export default ({ active, closeActive }) => (
    <div className={`menu_container menu_mm ${active}`}>

		<div className="menu_close_container" onClick={() => closeActive()} >
			<div className="menu_close"></div>
		</div>

		<div className="menu_inner menu_mm">
			<div className="menu menu_mm">
				<ul className="menu_list menu_mm">
					<ListLink to="/">Home</ListLink>
                    <ListLink to="/aboutus/">About Us</ListLink>
                    <ListLink to="/services">Services</ListLink>
                    <ListLink to="/contact/">Contact Us</ListLink>
				</ul>
				<div className="menu_copyright menu_mm">Angu All rights reserved</div>
			</div>

		</div>

	</div>
)