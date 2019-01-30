import React from 'react'
import { Link } from "gatsby"

import HiddenNavigation from './hiddenNav'

export const ListLink = props => (  
        <li className="main_nav_item">
        <Link to={props.to}>{props.children}</Link>
        </li>
)




const Hidden = ({ children, active, setActive, closeActive }) => (
    <section>
        <header className="header d-flex flex-row">
            <div className="header_content d-flex flex-row align-items-center">
            <div className="logo_container">
				<div className="logo">
					<span>angu</span>
				</div>
			</div>
			<nav className="main_nav_container">
				<div className="main_nav">
					<ul className="main_nav_list">
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/aboutus/">About Us</ListLink>
                    <ListLink to="/services">Services</ListLink>
                    <ListLink to="/contact/">Contact Us</ListLink>
					</ul>
				</div>
			</nav>
           </div>
            <div className="hamburger_container" onClick={() => setActive()} >
                <div className="menuFive">
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
