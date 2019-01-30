import React from 'react'
import containerImg from '../img/about-hero-2.jpg'

const styled = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroudImage:  `url(${containerImg})`,
        backgroudPosition: "center",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    header: {
        fontSize: "1.5rem"
    }
}


export default () => {
    return (
        <div style={styled.container} >
            <p style={styled.header}>404 Page.</p>
        </div>
    )
}