import SwitchThemeBtn from "@/components/SwitchThemeBtn"
import "./globals.css"
import { DarkModeProvider } from "@/context/DarkModeContext"

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="p-20 dark:bg-slate-900 dark:text-slate-100">
                <DarkModeProvider>
                    {<SwitchThemeBtn />}
                    {children}
                </DarkModeProvider>
            </body>
        </html>
    )
}
