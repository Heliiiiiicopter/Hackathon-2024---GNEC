import { useState } from 'react'

import './App.css'

function GenderEquality() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Goal 5: Gender Equality</h1>
      
      <h4> 
        This goal aims to achieve gender equality between women and men in the world. The UN has reached many
        milestones in their path of equality in the world. So far, according to the UN SDG website, the goal of 
        gender equality cannot be achieved by 2030, and would take almost 300 years to acheive complete equality.
        The UN has 9 targets for gender equality, and so far, none of them have been met. 
      </h4>
      
      <h3> Target 5.1 </h3>
      <pre> End all form of discrimination against all women and girls everywhere</pre>
      <p1> If laws are there to promote and maintain equality and discrimination in the country</p1>
      <p> Many countries lack laws and balances to ensure women an equal opportunity and quality of life. 
        According to the UN SDGs website, out of 119 countries, 55% didn't have laws to ban discrimination of women
        in 2022. Most countries do not have quotas for women in parliament. 60% didn't have laws defining rape based on consent. 
        45% didnt have laws outlining wage gaps between men and women. Almost 25% didnt have laws protecting women in marriage
        and their ability to divorce their husbands. Almost 3/4ths of the countries didnt have 18 as the minimum age to get married.
        Including many states in the United States, which has 18 as minimum age, but grants marriage for people as young as 16 with
        parental permission. 
      </p>

      <p> Solutions: <br></br> 
      Implement laws protecting womens rights and their ability to make their own decisions regarding their lives. 
      </p>
    </>
  )
}

export default GenderEquality

