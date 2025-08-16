import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

const ProjectPage = () => {
    const [loading, setLoading] = useState(true);

    // create a variable to use the location hook
    let location = useLocation();
    // use URLSearchParams to get the query parameter from the URL
    const searchParam  = location.search;
    // # DONE get the value of the query "q" parameter
    const queryParams = queryString.parse(location.search);
    const repoName = queryParams.id;
    console.log(repoName);

    const token = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
    const [selectedRepo, setSelectedRepo] = useState(null)
    const fetchRepoDetails = async (repoName) => {
        setLoading(true); // start loading
        try {
            const response = await axios.get(`https://api.github.com/repos/chalexR/${repoName}`, {
                headers: {
                    Authorization: `token ${token}`,
                },
            });
            console.log("Repo details:", response.data);
            setSelectedRepo(response.data);
        }catch (err) {
            console.error("Failed to fetch repo details", err);
        }finally{
            setLoading(false); // done loading
        }
    }

    useEffect(() => {
        if (repoName) {
        fetchRepoDetails(repoName);
        }
    }, [repoName]);

    return (
        <>
        {loading && <p>Loading project details...</p>}
        {!loading && selectedRepo && (
        <motion.div
            key={repoName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="main-content-int">
                <h2>{selectedRepo.name}</h2>
                <p>{selectedRepo.description}</p>
                <p>⭐ {selectedRepo.stargazers_count}</p>
                <p>📝 Language: {selectedRepo.language}</p>
                <p>📅 Created: {new Date(selectedRepo.created_at).toLocaleDateString()}</p>
            </div>
        </motion.div>
        )}
        </>
    )
}

export default ProjectPage;