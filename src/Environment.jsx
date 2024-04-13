import {useNavigate} from 'react-router-dom'
const Environment = () => {
    const navigate = useNavigate()
    return <>
    
    <p>Environment</p>
    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/responsible")}>Responsible Consumption/Production</button>
    </div>
    </>
}

export default Environment