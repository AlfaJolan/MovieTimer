import React from "react";
import { withRouter } from 'react-router-dom'

const AboutUs = () => {
    return (
        <main className={"container"}>
            <div className="d-flex flex-row">
                <div id="Ad"
                     className="order-1 col-lg-2 col-md-2 col-xl-2 col-none d-none d-md-block d-lg-block d-xl-block">
                    <p>AD image</p>
                </div>


                <section id="content" className="order-2 col-lg-8 col-md-8 col-xl-8 col-12 order-sm-1 mx-2">
                    <div className="container-xxl">
                        <div className="container">
                            <h3 className="border-start border-primary border-3 ps-1">About Us</h3>
                            <div id="aboutUs" className="text-left">
                                <p><strong>The beginning.</strong>
                                    MovieTimer, your go-to source for movie information and reviews, had its humble
                                    beginnings in the year 2016. Founded by a passionate group of film enthusiasts, the
                                    website was created with the vision of providing moviegoers with a reliable platform
                                    to make informed decisions about what to watch
                                </p>
                                <br/>
                                <p>
                                    <strong>The Team Behind MovieTimer.</strong>
                                    Our journey began with a small but dedicated team of individuals who shared a deep
                                    love for cinema. From web developers and designers to movie critics and data
                                    analysts, MovieTimer brought together a diverse group of talents. Each team member
                                    played a crucial role in shaping the website into what it is today.
                                    <br/><br/>
                                    As movie lovers ourselves, we understand the importance of finding that perfect film
                                    for a cozy night in or an exciting night out. We believe that everyone deserves
                                    access to a wealth of movie information, including ratings, reviews, and
                                    recommendations, all in one place.
                                </p>
                                <p>
                                    <strong>Our Mission.</strong>
                                    From day one, our mission has remained unwavering: to offer a comprehensive,
                                    user-friendly platform where you can explore the cinematic world. Whether you're
                                    seeking the latest Hollywood blockbuster, an indie gem, or a classic from the past,
                                    MovieTimer is here to assist you in your movie-watching journey.
                                    <br/><br/>
                                    As we continue to evolve and grow, we are committed to enhancing your experience by
                                    adding new features, expanding our movie database, and listening to your feedback.
                                    Your voice is essential in shaping MovieTimer's future, and we're dedicated to
                                    creating the ultimate movie resource based on your needs and preferences.
                                    <br/><br/>
                                    Thank you for being a part of our community. We look forward to many more years of
                                    celebrating the magic of cinema together. Enjoy your stay on MovieTimer and discover
                                    your next movie adventure!
                                </p>
                            </div>
                            <section id="FAQ">
                                <div className="container">
                                    <div className="text-left">
                                        <h4>FAQs</h4>
                                    </div>
                                    <div className="row my-5 mt-1 align-items-left">
                                        <div className="col-12 col-lg-12">
                                            <div className="accordion" id="accordionFAQs">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button"
                                                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                                aria-expanded="false" aria-controls="collapseOne">
                                                            Q1: What is MovieTimer, and how does it work?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse"
                                                         aria-labelledby="headingOne" data-bs-parent="#accordionFAQs">
                                                        <div className="accordion-body">
                                                            <strong>A1:</strong> MovieTimer is a website that provides
                                                            information and reviews about movies, much like Rotten
                                                            Tomatoes. It aggregates movie ratings, reviews, and other
                                                            related information to help users make informed decisions
                                                            about what to watch. Users can search for movies, read
                                                            reviews, and get recommendations based on their preferences.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button" type="button"
                                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                                aria-expanded="false" aria-controls="collapseTwo">
                                                            Q2: How are movie ratings calculated on MovieTimer?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                                         aria-labelledby="headingTwo" data-bs-parent="#accordionFAQs">
                                                        <div className="accordion-body">
                                                            <strong>A2:</strong> MovieTimer compiles ratings from a
                                                            variety of sources, including professional critics, audience
                                                            reviews, and its own rating system. The website then
                                                            calculates an average rating based on this data. Users can
                                                            also contribute by leaving their own ratings and reviews,
                                                            which are factored into the overall rating.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                            Q3: Can I write my own movie reviews on MovieTimer?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse"
                                                         aria-labelledby="headingThree" data-bs-parent="#accordionFAQs">
                                                        <div className="accordion-body">
                                                            <strong>A3:</strong> Yes, you can! MovieTimer encourages
                                                            user participation. You can create an account, log in, and
                                                            leave your own movie reviews, ratings, and comments. Your
                                                            reviews will contribute to the overall user-generated
                                                            ratings and help others make informed decisions.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button" type="button"
                                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                                aria-expanded="false" aria-controls="collapseFour">
                                                            Q4: Does MovieTimer have a mobile app, and is it free to
                                                            use?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse"
                                                         aria-labelledby="headingFour" data-bs-parent="#accordionFAQs">
                                                        <div className="accordion-body">
                                                            <strong>A4:</strong>Currently, MovieTimer is accessible
                                                            through a mobile-friendly website. There is also a mobile
                                                            app in development, which will be available for download in
                                                            the near future. As for its cost, MovieTimer is free to use,
                                                            and there are no subscription fees or hidden charges. Enjoy
                                                            access to movie reviews and ratings without any cost.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <div id="Ad" className="order-3 col-lg-2 col-md-2 col-xl-2 col-none d-none d-md-block d-xl-block">
                    <p>AD image</p>

                </div>
            </div>
        </main>
    )
}

export default withRouter(AboutUs)