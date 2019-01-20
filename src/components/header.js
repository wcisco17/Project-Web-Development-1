import React from 'react'



export default ({ title, bck }) => (
    <header className="header-services" style={{ backgroundImage: `url(${bck})` }} >
        <h1 className="head-services-1" >{title}</h1>
    </header>
)