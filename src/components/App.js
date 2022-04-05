import '../assets/css/App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { initialTheme } from '../actions';
import useLocalStorage from 'use-local-storage';

const App = () => {
    
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialTheme(theme));
    }, []);

    const themeData = useSelector(state => state.theme);

    return(
        <div className="main" data-theme={themeData}>
            <Header />
            <div>
                
            </div>
        </div>
    );
}

export default App;