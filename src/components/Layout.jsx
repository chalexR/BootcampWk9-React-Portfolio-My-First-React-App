import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';

// Set what pages we need to build a link for
const pages = [
  { name: 'Home', key: '' },
  { name: 'Contact', key: 'contact' }
]
//const [selectedInfo, setSelectedInfo] = useState('Professional');

const Layout = () => {

    const renderPageLink = () => {
        return pages.map(page => (
            <li><Link to={`/${page.key}`}>{page.name}</Link> </li>
        ))
    }

    return (
        <Router>
            <div>
                {renderPageLink()}
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default Layout;