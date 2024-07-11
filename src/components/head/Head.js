import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchComponent from '../SearchComponent/SearchComponent';

const Head = () => {
    const { none, toggleNone } = useContext(AppContext);

    return (
        <div className="head" style={{ color: none ? '#eeeeee' : '#000000', backgroundColor: none ? '#3498db' : '#cb6724' }}>
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/026/618/994/original/free-text-of-sticker-logo-sign-for-promotion-design-label-icon-free-vector.jpg" alt="free-logo" />
                <h1><Link to="/" className="link">SomeSome</Link></h1>
            </div>

            <div className="menu">
                <h2 className="some"><Link to="/catalog" className="link">Catalog</Link></h2>
                <h2 className="some"><Link to="/genres" className="link">Genres</Link></h2>
                <h2 className="some"><Link to="/preferences" className="link">Preferences</Link></h2>
                <h2 className="some"><Link to="/top" className="link">Top 15</Link></h2>
                <Link to="/request" className="link">
                    <i className="bi bi-alarm"></i>
                </Link>
            </div>

            <div className="icons">
                <i className="bi bi-brightness-high" onClick={toggleNone}></i>
                <i className="bi bi-bell"></i>
                <i className="bi bi-bookmark"></i>
            </div>

            <div className="input">
                <SearchComponent />
                <i className="bi bi-people-fill"></i>
            </div>
        </div>
    );
};

export default Head;
