import {useNavigate} from 'react-router-dom'
const Energy = () => {
    const navigate = useNavigate()
    return <>
    
    <h1><center> Goal 7: Affordable and Clean Energy </center></h1>
    <h4></h4>
    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/environment")}>Climate Action</button>

    </div>
    </>
}

export default Energy