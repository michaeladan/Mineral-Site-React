import { useState, useEffect } from 'react';



export default function Login() {


    return (
        <div>
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">Login Page</span>
                </h1>
            </header>
            <section className="page-section cta ">

                <h3 className='d-flex justify-content-center'>
                    <span className="section-heading-upper">
                        Please enter credentials for administrative access
                    </span>
                </h3>

                <form
                    className="row d-flex justify-content-center"

                >
                    <div className='form-group w-25'>
                        <input
                            type="username"
                            className="form-control mb-2 mt-2"
                            placeholder='Username'
                        // onChange={(e) => {
                        //     setUsername(e.target.value);
                        // }}
                        />
                        <input
                            type="password"
                            className="form-control mb-2 mt-2"
                            placeholder='Password'
                        // onChange={(e) => {
                        //     setPassword(e.target.value);
                        // }}
                        />

                        <button type='button' className="btn btn-danger" >Submit</button>
                    </div>
                </form>

            </section>

        </div>
    )
}