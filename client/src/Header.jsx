import {Link} from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">

                <div>Swapify</div>

                <ul className="nav nav-tabs">

                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Header;