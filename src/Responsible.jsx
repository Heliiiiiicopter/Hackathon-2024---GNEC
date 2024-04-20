import {useNavigate} from 'react-router-dom'
const Responsible = () => {
    const navigate = useNavigate()
    return <>
        <h1>Goal 12: Responsible Consumption and Production</h1>
      
      <h4> 
        This goal aims at promoting and maintaining sustainable consumption and production patterns. According to the UN, each person 
        wastes 120 kilograms of food per year, highlighting the dire need for change towards more sustainable lifestyles all around the 
        globe. Currently, the UN has 
        
      </h4>
      <p>problem</p>
      <hr></hr>
      <p>solution</p>

      <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/environment")}>Climate Change</button>
    </div>
    </>
}

export default Responsible