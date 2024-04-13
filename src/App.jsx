import { useState } from 'react'
import { navigate } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="goals">
    <div className="genderEquality" onClick={() => {navigate()}}>
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
