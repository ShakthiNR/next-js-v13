import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer/>
            </body>
        </html>
    )
}