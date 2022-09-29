import {BrowserRouter as Router,
Routes,
Route} from 'react-router-dom';


import { Board } from './pages/Board';
import { Home } from './pages/Home';


export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/board' element={<Board />} />
                
            </Routes>
        </Router>
    )
}