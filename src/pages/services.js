import React from 'react'
import Navigation from '../components/nav'
import Courses from '../components/courses'

export default () => (
    <Navigation>
        <header className="header-services" >
            <h1 className="head-services-1" >Courses</h1>
        </header>
        <section className="container-services" >
            <div className="line0"></div>
            <h1 className="head-services-2" >Our Courses Available</h1>
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        </section>
    </Navigation>
)