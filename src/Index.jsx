import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Environment from './Environment'

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="Environment" element={<Environment/>}/>
            </Routes>
        </Router>
    )
}
export default Index