import Footer from './componets/Footer';
import Header from './componets/Header';
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