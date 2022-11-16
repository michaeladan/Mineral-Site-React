import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navbar() {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to="/">Check It Out</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav mx-auto">
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase not-transparent "
                            to="/">Home</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/get-started">Get
                            Started</Link>
                        </li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/where-to-collect">Where
                            to Collect</Link>
                        </li>
                        <li className="nav-item px-lg-4" onClick={refreshPage}><Link className="nav-link text-uppercase" to="/recent-collection">My
                            Collection</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}