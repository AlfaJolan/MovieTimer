import React from "react";
import { withRouter } from "react-router-dom";

const Donations = () => {
    return (
        <main className="container">
            <div className="d-flex flex-row">
                <section
                    id="content"
                    className="order-1 col-lg-12 col-md-12 col-xl-12 col-12 order-sm-1 mx-2"
                >
                    <h4 className="border-start border-3 border-primary">
                        Donations for us
                    </h4>
                    <section id="pricing" className="bg-light mt-5">
                        <div className="container-lg">
                            <div className="text-center">
                                <h5>Levels of Donation</h5>
                                <p className="lead text-muted">
                                    Choose a Donation level to suit your heart
                                </p>
                            </div>
                            <div className="row my-5 align-items-center justify-content-center">
                                <div className="col-8 col-lg-4 col-xl-3 mt-2">
                                    <div className="card border-0">
                                        <div className="card-body text-center py-4">
                                            <h4 className="card-title">Level 1</h4>
                                            <p className="lead card-subtitle">Zero AD</p>
                                            <p className="display-6 my-4 text-primary fw-bold">
                                                $4.99
                                            </p>
                                            <p className="card-text mx-5 text-muted d-none d-lg-block">
                                                Zero AD, you support our team
                                            </p>
                                            <a
                                                href="javascript:void(0)"
                                                className="btn btn-outline-primary btn-lg mt-3"
                                            >
                                                Select
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-9 col-lg-4 mt-2">
                                    <div className="card border-primary border-2">
                                        <div className="card-header text-center text-primary">
                                            Most Popular and Sweet
                                        </div>
                                        <div className="card-body text-center py-5">
                                            <h4 className="card-title">Level 2</h4>
                                            <p className="lead card-subtitle">
                                                Zero AD & Faster Content
                                            </p>
                                            <p className="display-4 my-4 text-primary fw-bold">
                                                $6.99
                                            </p>
                                            <p className="card-text mx-5 text-muted d-none d-lg-block">
                                                Zero AD, and you also get some content earlier
                                            </p>
                                            <a
                                                href="javascript:void(0)"
                                                className="btn btn-outline-primary btn-lg mt-3"
                                            >
                                                Select
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-8 col-lg-4 col-xl-3 mt-2">
                                    <div className="card border-0">
                                        <div className="card-body text-center py-4">
                                            <h4 className="card-title">Level 3</h4>
                                            <p className="lead card-subtitle">
                                                Zero AD, Faster Content & Proud
                                            </p>
                                            <p className="display-5 my-4 text-primary fw-bold">
                                                $8.99
                                            </p>
                                            <p className="card-text mx-5 text-muted d-none d-lg-block">
                                                You get Level 2 things + Proud title
                                            </p>
                                            <a
                                                href="javascript:void(0)"
                                                className="btn btn-outline-primary btn-lg mt-3"
                                            >
                                                Select
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <h4 className="border-start border-3 border-primary">
                        How this supports us?
                    </h4>
                    <div className="container border-radius-2">
                        <p>
                            This helps us to make more content, to update our site, and give
                            our workers some sweets
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default withRouter(Donations);
