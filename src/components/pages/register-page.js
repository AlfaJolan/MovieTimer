import React, { useState } from "react";

const RegisterPage = () => {
    const [userType, setUserType] = useState("regular"); // State for user type

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission
        console.log("Form submitted!");
    };

    return (
        <section>
            <div className="container mt-5 pt-5">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <svg className="mx-auto my-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="" id="" className="form-control my-4 py-2" placeholder="Username" />
                                <input type="email" name="" id="" className="form-control my-4 py-2" placeholder="eMail" />
                                <input type="password" name="" id="" className="form-control my-4 py-2" placeholder="Password" />
                                <input type="password" name="" id="" className="form-control my-4 py-2" placeholder="Repeat the password" />

                                {/* User Type Radio Buttons */}
                                <div className="form-check my-3">
                                    <input
                                        type="radio"
                                        name="userType"
                                        id="regularUser"
                                        value="regular"
                                        checked={userType === "regular"}
                                        onChange={handleUserTypeChange}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="regularUser" className="form-check-label">Regular User</label>
                                </div>

                                <div className="form-check my-3">
                                    <input
                                        type="radio"
                                        name="userType"
                                        id="contentCreator"
                                        value="contentCreator"
                                        checked={userType === "contentCreator"}
                                        onChange={handleUserTypeChange}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="contentCreator" className="form-check-label">Content Creator</label>
                                </div>

                                {/* Agreement Checkbox */}
                                <div className="form-check my-3">
                                    <input type="checkbox" className="form-check-input" id="agreement" />
                                    <label htmlFor="agreement" className="form-check-label">I agree to the terms and conditions</label>
                                </div>

                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
