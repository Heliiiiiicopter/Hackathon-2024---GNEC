import {useNavigate} from 'react-router-dom'
const Consumption = () => {
    const navigate = useNavigate()
    return <>
    
    <h1><center> Goal 13: Climate Action </center></h1>
    <h4></h4>
    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/environment")}>Climate Change</button>

    </div>
    </>
}

export default Consumption