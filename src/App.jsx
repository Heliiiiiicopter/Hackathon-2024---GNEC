import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>

      <h1> United Nations Sustainable Development Goals</h1>

      <table> 
        <tr>
          <td> 
            The goal of the United Nations Sustainable Development Goals or UN SDGs is to reduce the disparities between countries around the world.
            Specfically between developing and developed countries in various regions around the world. There are 193 members of the United Nations, with all of them pledging to 
          </td>
        </tr>
      </table>

    <div className="goals">
    <div className="genderEquality">
        Gender Equality
      </div>
      <div className="environment?" onClick={() => {navigate('/environment')}}>
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


