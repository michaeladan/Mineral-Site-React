// import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect, useRef } from 'react';
// import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/context'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { login } = useAuth()

    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     try {
    //         setError("")
    //         setLoading(true)
    //         await login(emailRef.current.value, passwordRef.current.value)
    //         navigate('/admin');
    //     } catch {
    //         setError("Failed to log in")
    //     }

    //     setLoading(false)
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setError('');
    //     setLoading(true);
    //     login(emailRef.current.value, passwordRef.current.value)
    //         .then(() => {
    //             navigate('/admin');
    //         })
    //         .catch(() => {
    //             setLoading(false);
    //             setError('Try again');
    //         });
    //     setLoading(false);
    // }


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            console.log("Starting login")
            const userCredential = await login(emailRef.current.value, passwordRef.current.value)
            console.log(userCredential)
            if (userCredential.user) {
                navigate("/admin")
            } else {
                setError("Try it again")
            }
        } catch {
            setError("Try again")
            console.log(emailRef.current.value)
        }
        setLoading(false)
    }

    // const signIn = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             console.log(userCredential)
    //             console.log(email)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //      navigate("/admin")
    // }

    // useEffect(() => {
    //     if (email === "electric_boarder@hotmail.com") {
    //         navigate("/admin")
    //     }
    // }, [])

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
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            ref={passwordRef}
                            className="form-control mb-2 mt-2"
                            placeholder='Password'
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                        <button disabled={loading} type='submit' className="btn btn-danger" >Submit</button>
                    </div>
                </form>

            </section>

        </div>
    )
}