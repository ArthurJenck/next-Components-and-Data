"use client"

import { createContext, useEffect, useState } from "react"

export const DarkModeContext = createContext()
export const DarkModeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(!theme)
    }

    useEffect(() => {
        const root = window.document.documentElement
        theme === "dark"
            ? root.classList.add("dark")
            : root.classList.remove("dark")
    }, [theme])

    return (
        <DarkModeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}
