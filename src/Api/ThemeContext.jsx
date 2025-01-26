import {createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext()





export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return <ThemeContext value={{theme,setTheme}}>
        <div className={theme}>
                    {children}
                    </div>
    </ThemeContext>
}



export const useTheme = ()=>{
    return useContext(ThemeContext)
}
