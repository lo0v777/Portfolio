import {  Routes, Route } from 'react-router-dom';
import { AppLayout } from "./layout/Main";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={< AppLayout />}>
                    <Route index element = {< HomePage />} />
                </Route>
                <Route path="*" element={ <NotFoundPage/> }></Route>
            </Routes>
        </>
    );
}

export default App;
