import { useState } from 'react'



import { useNavigate } from 'react-router-dom'
import './App.css'
import equal from './assets/equal.png'

const App = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
     
      <h1><center> United Nations Sustainable Development Goals</center></h1>

      <div className="summary">
        <br></br>
        <br></br>
            The goal of the United Nations Sustainable Development Goals, or UN SDGs, is to reduce the disparities between countries around the world,
            specfically between developing and developed countries in various regions around the world. There are 193 members of the United Nations, 
            with all of them pledging to achieve all the SDGs by 2030. 
            <br></br>
            There are 17 Sustainable Development goals, some trying to end poverty or world hunger. Others trying to improve Literacy Rates and Gender Equality. 
            And some trying to increase safety and health. 
        
          </div>
    
    <div className="goals">
    <div className="genderEquality" onClick={() => {navigate("/genderequality")}}>
        Gender Equality
        
      </div>
      <div className="environment" onClick={() => {navigate('/environment')}}>
        Climate Action
      </div>
      <div className="energy" onClick={() => {navigate('/energy')}}> 
        Affordable and Clean Energy
      </div>
    </div>
      
      
    </>
  )
}

export default App


