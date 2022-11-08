import { useState } from 'react';
import data from "../data";

export default function SortCollection() {

    // const [ view, setView ] = useState([
    //     {
    //         // aToE: true,
    //         // fToJ: false,
    //         // kToO: false,
    //         // pToT: false,
    //         // uToZ: false
    //     }
    // ])

    // function byName(a, b) {
    //     if (a.title > b.title) {
    //         return 1;
    //     } else if (b.title > a.title) {
    //         return -1;
    //     } else {
    //         return 0
    //     }
    // }
    //  function sortName() {
    //     return data.sort(byName)
    // }
    // const myData = data.sort((a, b) => a.id - b.id)
    // console.log(sortName())

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
                    <li><a className="dropdown-item" href="/my-collection">Recent</a></li>
                    <li><a className="dropdown-item" href="/my-collection-a2z">A-Z</a></li>
                </ul>
            </div>

            {/* <section style={{display: "none"}}> */}
            <section>
                <div className="row m-auto">

                    {data && data
                        .sort((a, b) => a.title > b.title ? 1 : -1)
                        .map(info => {
                            const card = (
                                <div className=" col-md-4 col-6 img-container" key={info.id}>
                                    <div className="thumbnail image">
                                        <a href={info.fullImg}>
                                            <img className="rounded w-100" src={info.img} alt="rocks" />
                                        </a>
                                        <div className="caption">
                                            <p className="span rounded p-2 lh-sm">
                                                <span>{info.title}</span>
                                                <br />
                                                {info.description}
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
            {/* <script src="js/scripts.js"></script> */}
        </div>
    )
}