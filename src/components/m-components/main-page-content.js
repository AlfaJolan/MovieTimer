import React from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./carousel";

const MainContent = ({ movies }) => {
    console.log(movies)
    return (
        <main className="container">
            <div className="d-flex flex-row">
                <div
                    id="Ad1"
                    className="order-1 col-lg-2 col-md-2 col-xl-2 col-none d-none d-md-block d-lg-block d-xl-block position-sticky sticky-top"
                >
                    <p>AD image</p>
                </div>

                <section
                    id="content"
                    className="order-2 col-lg-8 col-md-8 col-xl-8 col-12 order-sm-1 mx-2">
                    <div className="container-xxl">
                        <div className="container">
                            <h3 className="border-start border-3 border-primary ps-1">
                                NEW & UPCOMING MOVIES IN THEATERS
                            </h3>
                                <Carousel movies={movies}/>
                            <hr/>
                        </div>
                    </div>
                </section>
                <div
                    id="Ad2"
                    className="order-3 col-lg-2 col-md-2 col-xl-2 col-none d-none d-md-block d-xl-block"
                >
                    <p>AD image</p>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                    crossOrigin="anonymous"></script>
            <script src="carousel-script.js"></script>
        </main>
    );
};

export default withRouter(MainContent);
