import React from 'react'
import { Link } from "gatsby"

const ListLink = props => (  
        <li class="main_nav_item">
        <Link to={props.to}>{props.children}</Link>
        </li>
)


export default ({ children }) => (
    <section>
        <header class="header d-flex flex-row">
            <div class="header_content d-flex flex-row align-items-center">
            <div class="logo_container">
				<div class="logo">
					<span>angu</span>
				</div>
			</div>
			<nav class="main_nav_container">
				<div class="main_nav">
					<ul class="main_nav_list">
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/aboutus/">About Us</ListLink>
                    <ListLink to="/services">Services</ListLink>
                    <ListLink to="/contact/">Contact Us</ListLink>
					</ul>
				</div>
			</nav>
           </div>
            <div class="hamburger_container">
                <i class="fas fa-bars trans_200"></i>
            </div>
	    </header>
        {children}
    </section>
  )