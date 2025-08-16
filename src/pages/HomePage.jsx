import React from "react";
import { Octokit } from "@octokit/rest";
import { useState } from 'react';
import Professional from '../pages/home/Professional';
import Design from '../pages/home/Design';
import Coding from '../pages/home/Coding';
import Consult from '../pages/home/Consult';
import Project from '../pages/home/Project';

const HomePage = () => {
    // TODO: Create a script to pull API from github, along with jobs stored in JSON file.

    // set an initial state for the info view
    const [info, setInfo] = useState("Professional");
    const [repoName, setRepoName] = useState(null);

    return (
        <>
        <div className="row">
            <div className="col-lg-5 gx-5">
                <div className="col-12">
                    <span className="btn btn-info" onClick={() => setInfo("Professional")}>Professional</span>
                    <span className="btn btn-info" onClick={() => setInfo("Design")}>Design</span>
                    <span className="btn btn-info" onClick={() => setInfo("Coding")}>Coding</span>
                    <span className="btn btn-info" onClick={() => setInfo("Consult")}>Consulting</span>
                </div>
                <div className="information-content col-12">
                    {info === "Professional" && <Professional />}
                    {info === "Design" && <Design />}
                    {info === "Coding" && <Coding />}
                    {info === "Consult" && <Consult />}
                    {info === "Repo" && <Project repoName={repoName} />}
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage;