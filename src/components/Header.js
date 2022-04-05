import React from 'react';
import useLocalStorage from 'use-local-storage';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../actions';

const Header = () => {
    
    const [theme, setTheme] = useLocalStorage('theme');

    const dispatch = useDispatch();

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        dispatch(changeTheme(newTheme));
    }

    return(
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand">
                  <i className="bi bi-bootstrap"></i>
                  <button onClick={() => switchTheme()}>Change</button>
                </a>
            </div>
        </nav>
    );
}

export default Header;