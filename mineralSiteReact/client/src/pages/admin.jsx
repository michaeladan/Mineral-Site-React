import { useState, useEffect } from 'react';
import Axios from 'axios'

export default function Admin() {

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
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setInfo(response.data)
        })
    }, [])

    const submitInfo = () => {
        Axios.post("http://localhost:3001/api/insert", {
            imageURL, mineralTitle, mineralDescription
        }).then(() => {
            console.log('successful insert')
        })
    }

    return (

        <div>

            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">Welcome</span>
                </h1>
            </header>
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="https://cdn.pixabay.com/photo/2020/07/05/03/20/desert-5371434__340.jpg" alt="..." />
                        <img src="" />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">ADMIN</span>
                                <span className="section-heading-lower">Landing page for adding photos</span>
                            </h2>
                            <p className="mb-3">To add photo, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="intro-button mx-auto"><a className="btn btn-primary btn-xl" href="#!">Good luck!</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* {info.map(val => (
                <div key={val.id}>
                    <img src={val.imageURL} alt="test"></img>
                    <h1>{val.mineralTitle}</h1>
                    <p>{val.mineralDescription}</p>
                </div>
            ))} */}


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
                                    <button type="button" className="btn btn-danger" onClick={submitInfo}>Submit</button>
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