import { createContext } from "react";
import { useContext, useState } from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: ()=>{}
})

export function useTheme() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return {
        isLight: theme === 'light',
        isDark: theme === 'dark',
        theme,
        toggleTheme
    }
}

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}