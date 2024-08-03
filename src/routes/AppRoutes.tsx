import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Error from '../pages/Error'

function AppRoutes() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRoutes;