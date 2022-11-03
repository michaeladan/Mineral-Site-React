import React from 'react';

export default function Started() {
    return (
        <div>
    <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3">Pick a desert</span>
            <span className="site-heading-lower">Pick a mine</span>
        </h1>
    </header>
    <section className="page-section about-heading">
        <div className="container">
            <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="assets/images/abandoned-mine.jpg"
                alt="..." />
            <div className="about-heading-content">
                <div className="row">
                    <div className="col-xl-9 col-lg-10 mx-auto">
                        <div className="bg-faded rounded p-5">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Being in Utah, there are so many
                                    opportunities</span>
                                <span className="section-heading-lower">Just pick a direction</span>
                            </h2>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem.</p>
                            <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer text-faded text-center py-5">
        <div className="container">
            <p className="m-0 small">Copyright &copy; Chuck Adan 2022</p>
        </div>
    </footer>
    {/* Bootstrap core JS */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    {/* Core theme JS */}
    <script src="js/scripts.js"></script>
        </div>
        )
        }