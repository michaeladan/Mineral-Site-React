import React from 'react';

export default function Collect() {
    return (
        <div>
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">Here are some of my favorite sites</span>
                    <span className="site-heading-lower">Enjoy</span>
                </h1>
            </header>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Gold Hill area</span>
                                    <span className="section-heading-lower">Adamite crystals</span>
                                </h2>
                            </div>
                        </div>
                        <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                            src="assets/images/rocks1.jpg" alt="..." />
                        <div className="product-item-description d-flex me-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">Take a drive an hour and a half west from SLC to find Reno. From here,
                                    head straign south into the desert. Follow some back roads for a while. Left at the
                                    fork, right at the gate and another left when you see the abonded town. Then straight
                                    on till morning. Eventually you will see Gold Hill in all its glory.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Dugway Geode Beds</span>
                                    <span className="section-heading-lower">This is not a geode</span>
                                </h2>
                            </div>
                        </div>
                        <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                            src="assets/images/rocks3.jpg" alt="..." />
                        <div className="product-item-description d-flex ms-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">Spend the day in the west desert of Utah and you may be lucky enough
                                    to find a whole buckets worth of these pretty specimens. They start out as round rocks,
                                    looking like everything else that surrounds them, but inside they hide their treasures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Moab, Ut</span>
                                    <span className="section-heading-lower">Colorful rocks</span>
                                </h2>
                            </div>
                        </div>
                        <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                            src="assets/images/colored-rocks.jpg" alt="..." />
                        <div className="product-item-description d-flex me-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">North, East, South, West and smack dab in the middle of Moab. There
                                    are many great places to find minerals of every spectrum. Plan a few days and
                                    find this mineral, that mineral and these minerals to bolster your collection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bootstrap core JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            {/* Core theme JS */}
            <script src="js/scripts.js"></script>
        </div>
    )
}