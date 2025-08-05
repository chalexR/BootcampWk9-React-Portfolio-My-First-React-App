import React from 'react';
import { useState } from 'react';
import Professional from '../pages/home/Professional';
import Design from '../pages/home/Design';
import Coding from '../pages/home/Coding';
import Consult from '../pages/home/Consult';

const HomePage = () => {
    // TODO: Create a script to pull API from github, along with jobs stored in JSON file.

    // set an initial state for the info view
    const [info, setInfo] = useState("Professional");

    return (
        <>
        <div className="row">
            <div className="col-lg-5 gx-5">
                <div className="col-12">
                    <span className="information-button" onClick={() => setInfo("Professional")}>Professional</span>
                    <span className="information-button" onClick={() => setInfo("Design")}>Design</span>
                    <span className="information-button" onClick={() => setInfo("Coding")}>Coding</span>
                    <span className="information-button" onClick={() => setInfo("Consult")}>Consulting</span>
                </div>
                <div className="information-content col-12">
                    {info === "Professional" && <Professional />}
                    {info === "Design" && <Design />}
                    {info === "Coding" && <Coding />}
                    {info === "Consult" && <Consult />}
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage;