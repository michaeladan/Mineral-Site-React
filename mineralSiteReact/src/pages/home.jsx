import React from 'react';

export default function Home() {
    return (
        <div>
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">Welcome to a mineral site for Chuck Adan</span>
                    <span className="site-heading-lower">Check It Out</span>
                </h1>
            </header>
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="/assets/images/in-mine.jpg" alt="..." />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">My hobbies</span>
                                <span className="section-heading-lower">Fun for all</span>
                            </h2>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="intro-button mx-auto"><a className="btn btn-primary btn-xl" href="#!">Join my next trip</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner bg-faded text-center rounded">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper"></span>
                                    <span className="section-heading-upper">How I spend my time</span>
                                </h2>
                                <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit.</p>
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