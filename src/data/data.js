const uuid = require("uuid-js");





export const COURSES = [
    {
        courses: {
            id: String(uuid.create()),
            title: "Beginners guide to HTML",
            description: "HTML is the foundation of all web pages. Without HTML, you wouldn't be able to organize text or add images or videos to your web pages. HTML is the beginning of everything you need to know to create engaging web pages!",
            price: `$${20}`,
            author: "Anthony Williams",
            avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/russ.jpeg",
            background: "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg"
        },
    },
    {
        courses: {
            id: String(uuid.create()),
            title: "Deep Learning : Plunge into Deep Learning",
            description: "Learn to create Deep Learning models starting from basics ",
            price: `$${25}`,
            author: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/30.jpg",
            background: "https://cdn-images-1.medium.com/max/1600/1*5ZuLCsB1KXEPgHu-qJ8WxQ.png"
        }
    },
    {
        courses: {
            id: String(uuid.create()),
            title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
            description: "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
            price: `$${15}`,
            author: "Jose Portugal",
            avatar: "https://randomuser.me/api/portraits/men/39.jpg",
            background: "https://udemy-images.udemy.com/course/750x422/453144_590e_4.jpg"
        }
    },
    {
        courses: {
            id: String(uuid.create()),
            title: "Beginner's Guide to Elm Programming. Build Web Apps! ",
            description: "A Beginner's Guide to Elm Programming for Aspiring Web App Developers & Entrepreneurs. Build Web Apps from Scratch.",
            price: `$${25}`,
            author: "Alisson Bets",
            avatar: "https://randomuser.me/api/portraits/women/43.jpg",
            background: "https://cdn-images-1.medium.com/max/2000/1*e2xUAA7ObWsmvatBaLdaiw.png"
        }
    },
    {
        courses: {
            id: String(uuid.create()),
            title: "The Complete 2019 Web Development Bootcamp",
            description: "The only course you need to learn to code and become a full-stack web developer. HTML, CSS, Javascript, Node and more!",
            price: `$${15}`,
            author: "Jade Surache",
            avatar: "https://randomuser.me/api/portraits/women/42.jpg",
            background: "https://udemy-images.udemy.com/course/750x422/1218586_9f86.jpg"
        }
    },
    {
        courses: {
            id: String(uuid.create()),
            title: "The Complete 2019 Web Development Bootcamp 2",
            description: "The only course you need to learn to code and become a full-stack web developer. HTML, CSS, Javascript, Node and more!",
            price: `$${15}`,
            author: "Williams Sissoko",
            avatar: "https://randomuser.me/api/portraits/men/49.jpg",
            background: "https://udemy-images.udemy.com/course/750x422/1218586_9f86.jpg"
        }
    },
]