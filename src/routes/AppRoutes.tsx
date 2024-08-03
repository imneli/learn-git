import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Commit from '../pages/Commit'

function AppRoutes() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/commit" element={<Commit />} />
        </Routes>
    );
}

export default AppRoutes;