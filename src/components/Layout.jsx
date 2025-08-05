import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

// Set what pages we need to build a link for
const pages = [
  { name: 'Home', key: '' },
  { name: 'Contact', key: 'contact' }
]
//const [selectedInfo, setSelectedInfo] = useState('Professional');

const Layout = (children) => {

    const renderPageLink = () => {
        return pages.map(page => (
            <Link key={page.name} className="nav-item nav-link" to={`/${page.key}`}>{page.name}</Link>
        ))
    }

    return (
        <Router>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md page-nav">
                    <Link className="navbar-brand" to='/'>Charles Richer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {renderPageLink()}
                        </div>
                    </div>
                </nav>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                    </Routes>
            </div>
        </Router>
    );
}

export default Layout;