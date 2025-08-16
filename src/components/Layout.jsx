import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
                <main className="main-page-loader">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/project" element={<ProjectPage />} />
                    </Routes>
                </main>
                <aside className="project-list">
                    <ListProjects />
                </aside>
            </section>
        </div>
    );
}

export default Layout;