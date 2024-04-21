import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Environment from './Environment'
import GenderEquality from './GenderEquality'
import Energy from './Energy'

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="environment" element={<Environment/>}/>
                <Route path="genderequality" element={<GenderEquality/>}/>
                <Route path="energy" element={<Energy/>}/>
            </Routes>
        </Router>
    )
}
export default Index