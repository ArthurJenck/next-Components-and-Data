import "./globals.css"

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="p-20">{children}</body>
        </html>
    )
}
