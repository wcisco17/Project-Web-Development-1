import React from 'react'



export default ({ children, title }) => (
    <section className="container-services" >
        <div className="line0"></div>
        <h1 className="head-services-2" >{title}</h1>
                {children}
    </section>
)