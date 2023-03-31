import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/context'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { login } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            const userCredential = await login(emailRef.current.value, passwordRef.current.value)
            if (userCredential.user) {
                navigate("/admin")
            } else {
                setError("Try it again")
            }
        } catch {
            setError("Try again")
        }
        setLoading(false)
    }

    return (
        <div>
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">Login Page</span>
                </h1>
            </header>
            <section className="page-section cta ">
                {error && <h3 className='d-flex justify-content-center'>{error}</h3>}
                <h3 className='d-flex justify-content-center'>
                    <span className="section-heading-upper">
                        Please enter credentials for administrative access
                    </span>
                </h3>

                <form
                    className="row d-flex justify-content-center"
                    onSubmit={handleSubmit}
                >
                    <div className='form-group w-25'>
                        <input
                            type="email"
                            ref={emailRef}
                            className="form-control mb-2 mt-2"
                            placeholder='Email'
                        />
                        <input
                            type="password"
                            ref={passwordRef}
                            className="form-control mb-2 mt-2"
                            placeholder='Password'
                        />
                        <button disabled={loading} type='submit' className="btn btn-danger" >Submit</button>
                    </div>
                </form>

            </section>

        </div>
    )
}