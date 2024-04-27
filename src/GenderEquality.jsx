import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.css'

function GenderEquality() {
  const navigate = useNavigate()
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
      
      <h3> Target 1 </h3>
      <pre> End all forms of discrimination against all women and girls everywhere</pre>
      <p className="p1"> Laws are in place to promote and maintain equality and discrimination in the country</p>
      <p> Many countries lack laws and balances to ensure women an equal opportunity and quality of life. 
        According to the UN SDGs website, out of 119 countries, 55% didn't have laws to ban discrimination of women
        in 2022. Most countries do not have quotas for women in parliament. 60% didn't have laws defining rape based on consent. 
        45% didnt have laws outlining wage gaps between men and women. Almost 25% didnt have laws protecting women in marriage
        and their ability to divorce their husbands. Almost 3/4ths of the countries didnt have 18 as the minimum age to get married.
        Including many states in the United States, which has 18 as minimum age, but grants marriage for people as young as 16 with
        parental permission. 
      </p>

      <p> Solutions: <br></br><br></br>
      Implement laws protecting womens rights and their ability to make their own decisions regarding their lives. 
      Many countries have laws regarding domestic abuse, rape, wage gaps, and discrmination. 
      <br></br>
      <br></br>
      Domestic Abuse: In recent years, many countires have implemented laws regarding domestic violence. 
      Some countries implemented laws in defining Domestic Violence, or adding a mimimum sentances for those
      who commit domestic violence.
      <br></br> 
      <br></br>
      Rape and Harrassment: Implementing laws that define rape as a sexual act without consent of the other party. Including laws 
      that protect the victims from harrassment or harm after the fact, and the removal of marry your rapist laws 
      or customs. Laws that protect from workplace harrassment and retaliation would further the equality of women.
      <br></br>
      <br></br>
      Wage Gaps: No country so far has acheived full wage equality. But many have reduced 80% of their gaps
      Iceland is at the top, having closed 91% of their gap. The following countries, Norway, Finland, 
      New Zealand, Sweden, Germany, Nicaragua, Namibia, and Lithuania are in the runner ups. 
      <br></br>
      <br></br>
      Discrimination: Laws that define discrimination as "the unjust or prejudicial treatment of different categories of 
      people, especially on the grounds of ethnicity, age, sex, or disability"(Oxford Dictionary).</p>
      

      <h3>Target 2</h3>
      <pre>Abolish violence and crime against women, including trafficking and child marriage</pre>
      <p className="p1"> Around 20 million people, mostly girls, are trafficked all around the world. 
      </p>
      <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/environment")}>Climate Action</button>
    <button onClick={() => navigate("/energy")}>Affordable and Clean Energy</button>
    </div>
    </>
  )
}

export default GenderEquality
