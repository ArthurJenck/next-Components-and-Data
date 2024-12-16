"use client"
import { useContext } from "react"
import { DarkModeContext } from "@/context/DarkModeContext"

const SwitchThemeBtn = () => {
    const { theme, toggleTheme } = useContext(DarkModeContext)

    return (
        <button
            className="fixed top-5 right-5 border border-violet-500 p-2"
            onClick={toggleTheme}
        >
            Mode : {theme}
        </button>
    )
}

export default SwitchThemeBtn
