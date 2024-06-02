import { useContext, useState } from 'react';
import './css/bootstrap.css';
import { ThemedButton } from './components/forms/ThemedButton';
import { ThemeContextProvider, useTheme } from './hooks/useTheme';

function App() {

    return (
        <div className="container mt-5">
                <ThemeSwicther/>
                <Toolbar />
        </div>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemeSwicther() {
    const {toggleTheme} = useTheme() 
    return  <button type="button" className="btn btn-primary" onClick={toggleTheme}>Changer de thème</button>
}

export default App;