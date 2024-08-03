import Footer from './componets/FooterFolder';
import Header from './componets/HeaderFolder';
import AppRoutes from "./routes/AppRoutes";

export default function Layout() {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    )
}