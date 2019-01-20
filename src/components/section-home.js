import React from 'react'
import Container from '../components/container'
import Row from '../components/rows'
import Footer from '../components/footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCode, faDatabase, faChartArea } from '@fortawesome/free-solid-svg-icons'


library.add(
    faCode,
    faDatabase, 
    faChartArea
)

export default () => (
    <section style={{ overflow: "hidden" }} >
        <Container title="What do we do?" >
            <Row 
            title="We develop mobile and web applications for both end users and enterprises."
            rowTitle1="Web And Mobile Applications"
            rowTitle2="Enterprise Applications"
            rowTitle3="Data Science"

            rowContent1={(<FontAwesomeIcon icon="code" size="3x"/>)}
            rowContent2={(<FontAwesomeIcon icon="database" size="3x" />)}
            rowContent3={(<FontAwesomeIcon icon="chart-area" size="3x" />)}
            
            rowContent_P1="We develop web and mobile applications using JavaScript, Python, Java or PHP frameworks. We are expert in latest frameworks."
            rowContent_P2="We develop custom applications for enterprise usage. We developed several recruitment, payroll and email responding software."
            rowContent_P3="We develop projects for data analysis, data mining and machine learning. We are expert in Apache Spark, Hadoop and TensorFlow."
            />
        </Container>

    <Container title="Featured Projects" >
            <Row 
            title="As a startup we did a significant number of projects. Those are web and mobile applications. Our clients were very happy with our precise, responsible and timely project delivery. "
            rowTitle1="UniRely"
            rowTitle2="Mailchimp Integration"
            rowTitle3="VinAudit MarketValue"

            rowContent1={(<img alt="..."
            style={{ width: "40%" }}
             src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBg8QBxASDQ0NEBIPDRcNDQ8PEBYQFREWFxURFhYYHDQhGBsxGxUTIjEhMTUrMi8uGB8/ODMtQy0tOi8BCgoKDQ0OGhAQFS0dHx0rNy0rNystLS0tLy0rLSsrLS0tKy0rLS0tKy0tLS0tLSsrMi0rLS0tKzctLS0rLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIGAwUHBP/EAEIQAAEEAQIEAwMHBg8BAAAAAAABAgMRBAUGEhMhMQciYTJBURQVNnGBkbQjMzdzhLIkNUJEUlNicnSDorGzxNIW/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwX/xAAfEQEBAQABBQADAAAAAAAAAAAAARECEiExQWEDIjL/2gAMAwEAAhEDEQA/ANIAsWeo7AFiwAFiwAFiwAFiwAFiwAFiwAFiwAFiwAFiwAFiwAFiwAFiwAFiwAFgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIKCACggAoIAKCACggAoIAKCACggAoIAKCACggAoIAKCACggAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIKCACggVa7hFBjxIWwKDHiKBQQBVBAEUEVaTqRFvsDWQIAqggCKCAKoIAKCACggAoIAAAIgAABzYmdJp83MwZHQyIiojo3K11L3S/gcJhJ7K/aB7D4lapNg7O06TDldFJOsaTOjXgc68dXLap69Tx9Ox6p4rfQfSf70X4VTyppy/F/LMbfBu7Mi2m9GZCorMmGBjuCNZEidDM5WI+r7sb179O5qVnZN+jEn+Og/D5Btux9v4u4Ns50mZjsZPiMVscnyjLY3i5KuSWROYre6Iq0ld+hrZx2rrQQp3mBqGHiZbGOw0zYeJrJZZ5p45XtVac+NjHI2NO6oi2vxX4ff4kbaj2xrkbcG1x52cxjZHOcrVa6nM4rtW9vffVepervhrPWcvTX7KxmabHWppy+avLc1/EiflVe+qc1etJ17p2Ox8G9QlXcvydZZFx0x5XpGsjliR3GzzI3si9V+9Th1HQ8WTwxbqONjJj5T5EZ5MjKexE+UrGtNkkX3Icfgz9NP2Wb9+M53Omp6fFu/XcnE3hmpjZWQxseS9GNTIkVjUReyMVeGvSjZcjTo91+G79Qliji1DGbKsj4WNj5nKVeLja3ottT7F7dOhru6tCXP3plpFk4bHS5T0a2bLSNyKrqRHIqdF9Dtdf1xm2No/M2C2V072uTKkmgkx2Kkjlc/lteiOci+yi9q99k3xnlHnyKU7vZW2nbo1blNdyoYm8zIfV8LLqk/tL1r6lX3HHkaviQ5bkw8KKTDa6kWafJXIexF9vjbIiMVUS6RKS/eder01rqopnQStfA50b2rbXMcrXIvxRU6op6Xvud2R4W6RJkOdJI90Dnue5XOc5caS1VV7qazv3aybdyYZMFzpMPMbxwK/22rSKrHKnfo5FRfr+HXYd5rXhPoqql07HtFul/g0nRa6mOVlyxHmyKU9F2voeFuPaWTNh4LPnHFR1x/Ks/luWuJionOvqiKnfuimlbeRmTrMUc+OzJZO9sfA+WeJG8Tk86OY5HJSX3vpZuc934uuvB9usZMOTnOXSYExoEVyRoks0rnN4l4XuWRy0tV0SkQ+JDUqgAAAAAAAFiyAgtiyAC2Yv6tKRwHqfikvO2DpL4vMzih6p264rqPK2m3aHvJsOgLp+4cdczBX82rH8E0fW0Rqr3peqdq9U6HWSt01HKsDtRVPc18WEi18ONHr9/Cc+O8e2Mzs4EStrPv+VnRV68OPNxfvs+83jwx+hGtfq5PwzjQdSz0y2xsxY0gx4eLlM41kdxOrjke9U8714W9aRERqIiJR3+2t3x6BomTjNxZZvlrVbO52YxlKsasXlokPlTqq9eL6xylsLGoQr52/W3/c9L8df44wv1En/Ih55C6NmYivZKsCLaNSaNste5Fk5fD3q/L9xse9t2x7tlifLjSY8kLVY3gy2PYrVcirbViu+i11T6lLd6pT22HJ/QRF+v/wC846zwY+mv7LN+/GfNJu+F+z26X8kmSBruNHpnRc2+asn9Rw91rt2Pk2ZuWLa2Xz24smRkKx8aquY2OLgc5F6MSJVvyt62vvMZemzD0+PfaXvLUEXqi5Ml/eb9rcKa/wCDePkz+fIw2MVr16v/ACcvKktfVqKq+qIp59uXU4tZ1GTIxoJMeWeRZJUfktmjtf6KJG1W/ep3u1t7M0vbc2n6vjuycWZJEbypEY9GyJ5mdfVVVF91lsuT4Z2d/wCCcyfJNTYz88rI3t+Kt4ZESvjSr/qQ0CPcmSrEuVOyfzfG/wDBy4mvrpOtsydvxpiJE3ga1z3TcbLt3NVa4lX31SJSVVWZZmVh52S+V0OTjukcr3xwSwvi4lW14HPbbEv3U6i53tzyY4tU1nK1bCZ85SyTQRv4Y+JrUY2RGeylJ34VTp6m772/RJo314/4WQ0PLzm5L4mcpYsSG+COOTz+ZU43rI5q29aS3VVIiIiIh3+s7ui1TbGNgPxJWR4aM5L0zY1ermRuYivTkUqU5bRK+wWeOw4PDbX/AJg3REsq1Bk1BPfZEcvkf9jq+xXHcb00L/5jXc7JjThhmirCXtU+UrmSNb6tY3IX0RzDz5UtOptu9tfl1XTtMhzF88GI2WXr7UknsOd68prHf5ii8f2PbVmmRi0p0aWxZABbFkAFsEAAAAAAAIUAYqgooAEoyAGNCigCUKKAJQoyIBKBkAIYuS2rw966GZAN93RJputadgv0yWDBZA1Uy40x3tylaqN8reFtPd0f1Vat133NK1TNXUdSlmcnDzXqrWp2axOjGJ6I1Gt+w+ZUCIZnHEVCkKaUAAAAAAAABABQQAUEAFBABQQAUEAFBABQQAUEAFBAAoAAUEAFBABQQAUEKBAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLFkFBLFgUEsWBQSxYFBLFgUEsWBQSxYFBLFgUEsWBQSxYFBLFgUEsWBQSxYFBLFgUEsoEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z"} />)}
            rowContent2={(<img alt="..."
            style={{ width: "40%" }}
             src={"data:image/png;base64,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"} />)}
            rowContent3={(<img alt="..."
            style={{ width: "40%" }}
             src={"http://img.app.kiwi/icon/zKuNjYBSONeJqv30_hW4A3KCoi45PCc8GAuKt-4zN52dcoByTXqBPoQaX4rZUY-B5g"} />)}
            
            rowContent_P1="This application is built using Laravel and WebRTC technologies where we implemented all sort of IM and WebRTC functionality. This app is used to connect mentors with students and in this process it help students in the admission of US universities. "
            rowContent_P2="Our mailchimp integration project can easily integrate with any laravel website and import and export all of the contacts from your mailchimp account inside Laravel system. Also this creates interface in Laravel for the autoresponder. "
            rowContent_P3="We developed the intelligent MarketValue API using big data technologies which can predict any used vehicles price based on mileage, make, model, trim and year. This deals with billions of rows and use data analysis to predict current price. "
            />
   </Container>

    <Container title="Testimonials" >
            <Row 
            title="Some of our clients willingly gave us testimonials which are our main achievement. "
            rowTitle2="Ally Cunning"
            rowTitle3="John Doe"
            
            rowTitle1="Chery Bets"
            rowContent1={(<img alt="..."
            style={{ width: "40%" }}
            className="rounded-circle"
             src={"https://randomuser.me/api/portraits/women/59.jpg"} />)}
             rowContent_P1="This application is built using Laravel and WebRTC technologies where we implemented all sort of IM and WebRTC functionality. This app is used to connect mentors with students and in this process it help students in the admission of US universities. "

            rowContent2={(<img alt="..."
            style={{ width: "40%" }}
            className="rounded-circle"
             src={"https://randomuser.me/api/portraits/women/50.jpg"} />)}

            rowContent3={(<img alt="..."
            style={{ width: "40%" }}
            className="rounded-circle"
             src={"https://randomuser.me/api/portraits/men/19.jpg"} />)}
            
            rowContent_P2="Our mailchimp integration project can easily integrate with any laravel website and import and export all of the contacts from your mailchimp account inside Laravel system. Also this creates interface in Laravel for the autoresponder. "
            rowContent_P3="We developed the intelligent MarketValue API using big data technologies which can predict any used vehicles price based on mileage, make, model, trim and year. This deals with billions of rows and use data analysis to predict current price. "
            />
   </Container>

   <Footer />
   
    </section>
)
