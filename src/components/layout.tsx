import Footer from "./footer"
import NavBar from "./header"

const Layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;