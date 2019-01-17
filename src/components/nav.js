import React from 'react'
import { Link } from "gatsby"

import HiddenNavigation from './hiddenNav'

const ListLink = props => (  
        <li class="main_nav_item">
        <Link to={props.to}>{props.children}</Link>
        </li>
)




const Hidden = ({ children, active, setActive, closeActive }) => (
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
            <div class="hamburger_container" onClick={() => setActive()} >
                <div class="menuFive">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
	    </header>

        <HiddenNavigation 
        active={active}  
        closeActive={closeActive}
        />

        <section>
            {children}
        </section>
        
    </section>
  )


  export default class HiddenNav extends React.PureComponent {
      state = {
          active: ""
      }

      setActive = () => this.setState({ active: "active" })

      closeActive = () => this.setState({ active: "" })


    render() {
        return (
            <Hidden 
            children={this.props.children}
            active={this.state.active}
            setActive={this.setActive}
            closeActive={this.closeActive}
            />
        )
    }
}