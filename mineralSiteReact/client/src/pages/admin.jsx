import { useState, useEffect } from 'react';
import Axios from 'axios'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/context'

export default function Admin() {

    const [authUser, setAuthUser] = useState(null)
    const navigate = useNavigate();
    const { logout } = useAuth()

    const [error, setError] = useState('')
    const [imageURL, setImage] = useState('')
    const [mineralTitle, setTitle] = useState('')
    const [mineralDescription, setDescription] = useState('')
    const [info, setInfo] = useState([{
        id: "",
        imageURL: "",
        mineralTitle: "",
        mineralDescription: ""
    }])

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen();
        }
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setInfo(response.data)
        })
    }, [])

    const submitInfo = () => {

        Axios.post("http://localhost:3001/api/insert", {
            imageURL, mineralTitle, mineralDescription
        });

        setInfo([
            ...info,
            { imageURL, mineralTitle, mineralDescription },
            alert("Specimen added to collection!"),
        ])
    }

    async function handleLogout() {
        setError('')
        try {
            await logout()
            navigate("/login")
        } catch {
            setError("Logout Failed")
        }
    }

    return (

        <div>

            <header>
                <div className="site-heading text-center text-faded d-none d-lg-block">
                    <h1>Welcome to the admin page!</h1>
                    <button className="btn btn-danger" variant="link" onClick={handleLogout} >Sign Out</button>
                    {error && <h3 className='d-flex justify-content-center'>{error}</h3>}
                </div>
            </header>

            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner bg-faded text-center rounded">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper"></span>
                                    <span className="section-heading-upper">Fill in all fields to add new speciman</span>
                                </h2>
                                <form>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Image URL"
                                            aria-label="Image URL"
                                            aria-describedby="button-addon2"
                                            onChange={(e) => {
                                                setImage(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mineral Name"
                                            aria-label="Mineral Name"
                                            aria-describedby="button-addon2"
                                            onChange={(e) => {
                                                setTitle(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            placeholder="Description"
                                            onChange={(e) => {
                                                setDescription(e.target.value)
                                            }}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-danger" onClick={submitInfo}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Bootstrap core JS*/}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            {/* Core theme JS */}
            <script src="js/scripts.js"></script>
        </div>
    )

}