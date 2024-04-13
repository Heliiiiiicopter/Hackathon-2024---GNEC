import {useNavigate} from 'react-router-dom'
const Environment = () => {
    const navigate = useNavigate()
    return <>
    
    <p>Environment</p>
    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/")}>Poverty?</button>
    </div>
    </>
}

export default Environment