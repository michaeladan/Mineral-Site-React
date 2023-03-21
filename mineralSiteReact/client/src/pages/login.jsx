import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from "../firebase"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            })
    }

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
                    onSubmit={signIn}
                >
                    <div className='form-group w-25'>
                        <input
                            type="email"
                            className="form-control mb-2 mt-2"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="form-control mb-2 mt-2"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type='submit' className="btn btn-danger" >Submit</button>
                    </div>
                </form>

            </section>

        </div>
    )
}