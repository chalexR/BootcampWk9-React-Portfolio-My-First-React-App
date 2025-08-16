import { Link } from 'react-router-dom';
// Set what pages we need to build a link for
const pages = [
  { name: 'Home', key: '' },
  { name: 'Contact', key: 'contact' }
]
const Header = () => {

    const renderPageLink = () => {
        return pages.map(page => (
            <li className="navbar-li button">
                <Link key={page.name} className="nav-item" to={`/${page.key}`}>{page.name}</Link>
            </li>
        ))
    }

    return (
        <nav className="navbar">
            <Link className="navbar-brand" to='/'>Charles Richer</Link>
            <ul>
                {renderPageLink()}
            </ul> 
        </nav>
    );
}

export default Header;