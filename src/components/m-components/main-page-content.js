import React from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./carousel/carousel";
import TableWithDataWithContext from "../table";

const MainContent = ({ movies }) => {
    console.log(movies)
    return (
        <main className="container">
            <div className="d-flex flex-row">
                <div id="Ad"
                     className="order-1 col-lg-1 col-md-1 col-xl-1 col-none d-none d-md-block d-lg-block d-xl-block">
                    <p>AD image</p>
                </div>
                <section
                    id="content"
                    className="order-2 col-lg-10 col-md-10 col-xl-10 col-12 order-sm-1 mx-2">
                    <div className="container-xxl">
                        <div className="container">
                            <h3 className="border-start border-3 border-primary ps-1">
                                NEW & UPCOMING MOVIES IN THEATERS
                            </h3>
                            <Carousel movies={movies}/>
                            <hr/>
                        </div>
                    </div>
                    <h3 className="border-start border-3 border-primary mb-4 ps-1">We recommend : </h3>

                    <div className="container-xxl">
                        <div className="container">
                            <TableWithDataWithContext/>
                            <hr/>
                        </div>
                    </div>

                </section>
                <div id="Ad"
                     className="order-1 col-lg-1 col-md-1 col-xl-1 col-none d-none d-md-block d-lg-block d-xl-block">
                    <p>AD image</p>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                    crossOrigin="anonymous"></script>
            {/*<script src="carousel-script.js"></script>*/}
        </main>
    );
};

export default withRouter(MainContent);
