import React from "react"
import Navigation from '../components/nav'
import "../styles/global.css"
import "../styles/main.css"
import "../styles/media.css"
import "../styles/fontawesome-all.css"


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import "../styles/bootstrap.min.css"
import SectionHome from '../components/section-home';

// loader for cards https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html

export default class Carousels extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
		  value: 0,
		};
	  }
	  
	  // we check if we got event from input (and it has target property) or just value from Carousel 
	  onChange = e => this.setState({ value: e.target ? e.target.value : e });


 	render() {
		
		 
		return (
			<Home 
			onChange={this.onChange}
			value={this.state.value}
			/>
		)
	}
}

const Home = ({ value, onChange }) => (
    <Navigation>
			<Carousel
			value={value}
			onChange={onChange}
			autoPlay={3000}
			className="carousel-container"
			>
			 <img className="carousel-img" src={require("../img/slide_1.jpg")} />
			 <img className="carousel-img" src={require("../img/slide_2.jpg")}/>
			 <img className="carousel-img" src={require("../img/rawpixel-665368-unsplash.jpg")} />
			</Carousel>
			<div className='edu-container' >
			<h1 className='edu-home' >Get Your Education Today!</h1>
			</div>
			<SectionHome />
    </Navigation>
)
