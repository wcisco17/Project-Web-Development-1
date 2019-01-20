import React from 'react'
import Navigation from '../components/nav'
import Courses from '../components/courses'

import Container from '../components/container'
import Header from '../components/header'
import Background from '../img/rawpixel-983726-unsplash.jpg'
import Footer from '../components/footer'
export default () => (
    <Navigation>
        <Header title={"Courses"} bck={Background} />
        <Container title={"Our Courses Available"} >
            <Courses />
            <Footer />
        </Container>
    </Navigation>
)