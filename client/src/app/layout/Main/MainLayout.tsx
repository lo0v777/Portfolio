import { Outlet } from 'react-router-dom';
import { UINavBar } from '../../../widgets/NavBar';


const AppLayout = () => {
    return (
        <div className="app-layout">  
            <UINavBar /> 
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;