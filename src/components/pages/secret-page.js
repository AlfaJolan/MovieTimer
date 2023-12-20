import React from "react"
import {Redirect} from "react-router-dom";
import './secret-page.css'
import BackGroundColorClick from "../BackGroundColorChange/BackGroundColorClick";
const SecretPage = ({isLoggedIn}) => {



    if(isLoggedIn){
        return (
            <div className={"container mt-5 pt-5"}>
                <h1>Secret Page with Button</h1>
                <BackGroundColorClick>

                <button>Bottom Button Color Changer!</button>
                    <span> Or Span Which Is Also Change Color!</span>
                </BackGroundColorClick>

                <h2>Table that uses colspan and rowspan</h2>
                <h2>Shark Population Table</h2>
                <h5>(Shark because i think it is most beautiful and dangerous also not so dangerous animal)</h5>
                <table>
                    <thead>
                    <tr>
                        <th rowSpan="2">Species</th>
                        <th colSpan="2">Population</th>
                        <th rowSpan="2">Average Lifespan (years)</th>
                    </tr>
                    <tr>
                        <th>Male</th>
                        <th>Female</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Great White Shark</td>
                        <td>150,000</td>
                        <td>120,000</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>Hammerhead Shark</td>
                        <td>80,000</td>
                        <td>75,000</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Tiger Shark</td>
                        <td>100,000</td>
                        <td>90,000</td>
                        <td>50</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return <Redirect to="/"/>
}
export default SecretPage