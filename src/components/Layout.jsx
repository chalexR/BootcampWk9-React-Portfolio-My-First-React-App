import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ListProjects  from './ListProjects';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProjectPage from '../pages/ProjectPage';

// Set what pages we need to build a link for
const pages = [
  { name: 'Home', key: '' },
  { name: 'Contact', key: 'contact' }
]
//const [selectedInfo, setSelectedInfo] = useState('Professional');

const Layout = (children) => {
    const location = useLocation();
    //constant to toggle the project list when viewed on mobile
    const [projectListToggle, setProjectListToggle] = useState(null); // null to not show ProjectList

    const renderPageLink = () => {
        return pages.map(page => (
            <li>
                <Link key={page.name} className="nav-item nav-link" to={`/${page.key}`}>{page.name}</Link>
            </li>
        ))
    }

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md page-nav">
                <Link className="navbar-brand" to='/'>Charles Richer</Link>
                <ul>
                    {renderPageLink()}
                </ul> 
            </nav>
            <section className="main-content-holder">
                <main className={projectListToggle ? "main-page-holder list-shrink" : "main-page-holder"}>
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/project" element={<ProjectPage />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <aside className="project-list">
                    <div className="project-list-toggle" onClick={() => setProjectListToggle(!projectListToggle)}>
                        <div>&lt;</div>
                    </div>
                    <ListProjects projectListToggle={projectListToggle}/>
                </aside>
            </section>
        </div>
    );
}

export default Layout;