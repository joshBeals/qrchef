import light from '../assets/img/light.png';
import dark from '../assets/img/dark.png';
import qrcode from '../assets/img/qr-code.png';
import React from 'react';
import useLocalStorage from 'use-local-storage';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../actions';

const Header = () => {
    
    const [theme, setTheme] = useLocalStorage('theme');

    const dispatch = useDispatch();
    const themeData = useSelector(state => state.theme);

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        dispatch(changeTheme(newTheme));
    }

    return(
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand">
                    <img src={qrcode} alt="Logo" />
                    <span>QR Chef</span>
                </a>
                <div className='d-flex'>
                    <button className='btn toogle-btn' onClick={() => switchTheme()} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Toogle dark mode">
                        {themeData == 'light' ? <img src={dark} alt='dark' /> : <img src={light} alt='light' />}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;