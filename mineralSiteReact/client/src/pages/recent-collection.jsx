import { useState, useEffect } from 'react';
import Axios from 'axios'

export default function RecentCollection() {

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

    return (
        <div>
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">Here are some of my favorite pieces</span>
                    <span className="site-heading-lower">Behold</span>
                </h1>
            </header>



            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle mx-3 mt-1 px-4" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Sort
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="/recent-collection">Recent</a></li>
                    <li><a className="dropdown-item" href="/sorted-collection">A-Z</a></li>
                </ul>
            </div>

            <section>
                <div className="row m-auto">
                    {info.map(val => {
                        const card = (
                            <div className=" col-md-4 col-6 img-container" key={val.id}>
                                <div className="thumbnail image">
                                    <a href={val.imageURL}>
                                        <img className="rounded w-100" src={val.imageURL} alt="rocks" />
                                    </a>
                                    <div className="caption">
                                        <p className="span rounded p-2 lh-sm">
                                            <span>{val.mineralTitle}</span>
                                            <br />
                                            {val.mineralDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                        return card;
                    })}
                </div>
            </section>
            <section className="page-section about-heading">
                <div className="container">
                    <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0 moab" src="assets/images/explorer.jpg"
                        alt="..." />
                    <div className="about-heading-content">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded rounded p-5">
                                    <h2 className="section-heading mb-4">
                                        <span className="section-heading-upper">I am always open to talking and trading</span>
                                        <span className="section-heading-lower">Passions unite</span>
                                    </h2>
                                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
                                        ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                        fugiat quo voluptas nulla pariatur?</p>
                                    <p className="mb-0">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bootstrap core JS
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
            {/* Core theme JS */}
            <script src="js/scripts.js"></script>
        </div>
    )
}