import React from 'react'

import Navigation from '../components/nav'
import Container from '../components/container'
import Header from '../components/header'
import Row from '../components/rows'
import Footer from '../components/footer'

import Background from '../img/about-hero-1.jpg'


export default () => (
    <Navigation>
       <Header bck={Background}  title="About Us" />
       <Container title="Who We Are">   
            <div className="container-about" >
                <p>
                We are a small team of few smart, talented and energetic programmers and we strive to reduce risk, improve performance and promote sustainable business. Government and state agencies rely on us in designing and implementing end-to-end ID management solutions. We bring innovation not only in our technologies but also in the way we manage our projects and deliver our solutions. Our expertise in consultancy, project management, training and support combined with our relentless quest for customer satisfaction through on-time, on-budget and on-spec delivery of complex turnkey solutions, has earned BlueHost an enviable reputation in the industry.
                    <br />
                Although we are a very small team we focus mainly on web and mobile applications. We have strong skill in PHP (Laravel, Slim, Symfony, Wordpress), JavaScript (NodeJS, Express, VueJS, ReactJS, Angular), Java (Spring, Hibernate), Python (Django) and Ruby on Rails. On mobile we work with native Android, IOS, React Native and Cordova frameworks. We also did very significant amount of work related to data science using Apache Spark and Hadoop cluster. 
                </p>
            </div>
       </Container>

        <Container title="Our Team" >
            <Row 
            title=" We are a team of two people thriving to provide best outcome and helping businesses to succeed. "
            rowContent1={(<img alt="..."
            style={{ width: "40%" }}
            className="rounded-circle"
             src={require("../img/mirza-sharmin.jpg")} />)}
            rowTitle1={(
                <div>

                    <p>
                    Mirza Sharmin
                        <br />
                        Co-Founder and Software Developer
                   </p>
                </div>
            )}
            rowContent_P1={<p className="about-p" >Primarily works with PHP and Javascript frameworks. Also works in Java, Android and Spark framework. Has strong background in Enterprise application development. </p>}

            rowContent2={(<img alt="..."
            style={{ width: "40%" }}
            className="rounded-circle"
             src={"https://avatars0.githubusercontent.com/u/35783824?s=460&v=4"} />)}
            rowTitle2={(
                <div>

                    <p>
                    Williams Sissoko
                        <br />
                        Founder and Software Developer
                   </p>
                </div>
            )}
            rowContent_P2={<p className="about-p" >Primarily works with PHP and Javascript frameworks. Also works in Java, Android and Spark framework. Has strong background in Enterprise application development. </p>}

            rowTitle3={(
                <div>

                    <p>
                        <span className="founder-p" >
                        Cheryl Song
                        </span>
                        <br />
                        Co-Founder and Chief Business Officer
                   </p>
                </div>
            )}
            rowContent3={(<img alt="..."
            style={{ width: "40%" }}
            className="rounded-circle"
             src={"https://randomuser.me/api/portraits/women/70.jpg"} />)}
             rowContent_P3={<p className="about-p" >Primarily works with PHP and Javascript frameworks. Also works in Java, Android and Spark framework. Has strong background in Enterprise application development. </p>}
            />      
        </Container>

       <Footer />
    </Navigation>
)