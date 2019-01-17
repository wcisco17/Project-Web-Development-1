import React from 'react'
import { COURSES } from '../data/data'




export default () => (
<React.Fragment>
    {COURSES.map((course) => {
        const {
            id,
            title,
            description,
            price,
            author,
            avatar,
            background
        } = course.courses
        return (
        <div className="blog-container" key={id} >
            <div className="blog-container">
                <div className="blog-header">
                        <div className="blog-cover" style={{
                            backgroundImage: `url(${background})`
                        }} >
                            <div className="blog-author">
                            <img src={`${avatar}`} 
                            className="img-author"
                            alt="..."
                            />
                                <h3>
                                    {author},
                                    <i> Author</i>   
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="blog-body">
                        <div className="blog-title">
                            <h1><a href="#">
                            {title}
                            </a></h1>
                        </div>
                        <div className="blog-summary">
                            {description}
                        </div>
                        <div className="blog-tags">
                        <ul>
                            <li><a href="mailto:courses@info.com" style={{ padding: 10 }} >{price}</a></li>
                        </ul>
                        </div>
                    </div>
            </div>
        </div>
    )})}
</React.Fragment>
)