import React from 'react'
import Navigation from '../components/nav'
import { Formik } from "formik";


const submitEmail = (fullName, email, phone, message) => {
    const mail = `
            Full name: ${fullName},
            Email: ${email},
            Phone: ${phone},
            Message: ${message}
    `;
    window.open(`mailto:angu@courses.com?subject=Contacts&body=${document.body.innerHTML = mail}`)
}


export default () => (
    <Navigation>
        <header className="contact-header" >
            <h1 className="head-contact-1" >Get in Touch</h1>
        </header>
        <section className="container-contact-1" >
            <div className="site-section site-section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 mb-5">
        <Formik
        initialValues={{
            fullName: "",
            email: "",
            phone: "",
            message: ""
        }}
        onSubmit={({ fullName, email, phone, message }, { resetForm }) => {
            console.log(fullName, email, phone, message)
            
            submitEmail(fullName, email, phone, message)
            resetForm() 
        }}
        >
            {({ values, handleChange, handleSubmit }) => {
                return (
               <form onSubmit={handleSubmit} className="p-5 bg-white">
                    <div className="row form-group">
                        <div className="col-md-12 mb-3 mb-md-0">
                            <label className="font-weight-bold" htmlFor="fullname">Full Name</label>
                            <input
                            required 
                                value={values.fullName}
                                onChange={handleChange}
                                name="fullName" 
                                type="text" 
                                id="fullname" className="form-control" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label className="font-weight-bold" htmlFor="email">Email</label>
                            <input 
                                value={values.email}
                                required
                                onChange={handleChange}
                                name="email" 
                                type="email" 
                                id="email" className="form-control" placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12 mb-3 mb-md-0">
                            <label className="font-weight-bold" htmlFor="phone">Phone</label>
                            <input 
                                value={values.phone}
                                required
                                onChange={handleChange}
                                name="phone" 
                                type="text" 
                                id="phone" className="form-control" placeholder="Phone #" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                            <label className="font-weight-bold" htmlFor="message">Message</label>
                            <textarea value={values.message}
                            required
                                onChange={handleChange} 
                                name="message" name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Say hello to us"></textarea>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-12">
                            <input 
                                type="submit" 
                                value="Send Message"
                                 className="btn btn-primary pill px-4 py-2" />
                        </div>
                    </div>
                </form>
                )
            }}
        </Formik>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 mb-3 bg-white">
                                <h3 className="h5 text-black mb-3">Contact Info</h3>
                                <p className="mb-0 font-weight-bold">Address</p>
                                <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                <p className="mb-0 font-weight-bold">Phone</p>
                                <p className="mb-4"><a href="#">+1 232 3235 324</a></p>
                                <p className="mb-0 font-weight-bold">Email Address</p>
                                <p className="mb-0"><a href="#"><span className="__cf_email__">angu@courses.com</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Navigation>
)