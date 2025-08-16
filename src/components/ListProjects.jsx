import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const ListProjects = ({setInfo, setRepoName}) => {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    const handleSetInfo = (repoName) => {
        setInfo("Repo");
        setRepoName(repoName);
    }

    const token = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepos = async () => {
            try{
                const response = await axios.get("https://api.github.com/users/chalexR/repos",{
                    headers: {
                        Authorization: `token ${token}`
                    }
                });

                setRepos(response.data);
                //console.log("Raw response:", response.data);

            }catch(err){
                console.error(err);
                setError("Failed to fetch repos");
            }
        }
        fetchRepos();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id} onClick={() => handleSetInfo(repo.name)}>
                       {repo.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListProjects;