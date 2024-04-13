import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1> United Nations Sustainable Development Goals</h1>

      <div className="summary">
            The goal of the United Nations Sustainable Development Goals or UN SDGs is to reduce the disparities between countries around the world.
            Specfically between developing and developed countries in various regions around the world. There are 193 members of the United Nations, 
            with all of them pledging to achieve all the SDGs by 2030. 
            <br></br>
            There are 17 Sustainable Development goals, some trying to end poverty or world hunger. Others trying to improve Literacy Rates and Gender Equality. 
            And some trying to increase safety and health. 
        
          </div>

    <div className="goals">
    <div className="genderEquality">
        Gender Equality
      </div>
      <div className="environment?">
        Environment
      </div>
      <div className="poverty?">
        Poverty
      </div>
    </div>
      
      
    </>
  )
}

export default App


