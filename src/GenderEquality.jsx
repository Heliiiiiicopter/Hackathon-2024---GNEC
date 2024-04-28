import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.css'
import childmarriage from './assets/childmarriage.jpeg'
import glassceiling from './assets/glassceiling.jpeg'
import wagegaps from './assets/wagegaps.png'
import reprodrights from './assets/reprodrights.jpeg'



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
      <img align="right" src={glassceiling} width="300" height="200" style={{padding: 20}}  />

      <p className="p1"> Laws are in place to promote and maintain equality and discrimination in the country 
      Many countries lack laws and balances to ensure women an equal opportunity and quality of life. 
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
      </p>
      <img align="right" src={wagegaps} width="300" height="200" style={{padding: 20}}  />

      <p>
        
      <br></br>
      
      <br></br>

      Wage Gaps: No country so far has acheived full wage equality. But many have reduced 80% of their gaps
      Iceland is at the top, having closed 91% of their gap. The following countries, Norway, Finland, 
      New Zealand, Sweden, Germany, Nicaragua, Namibia, and Lithuania are in the runner ups. 
      
      <br></br>
      
      <br></br>
      
      Discrimination: Laws that define discrimination as "the unjust or prejudicial treatment of different categories of 
      people, especially on the grounds of ethnicity, age, sex, or disability"(Oxford Dictionary).</p>
      

      <h3>Target 3 </h3>
      <pre>Eliminate harmful traditions against women and child marriage</pre>
      <img align="right" src={childmarriage} width="300" height="200" style={{padding: 20}}  />
      <p className="p1"> 
      Many girls are sold into marriage at a young age, sometimes 15 or lower. These girls face physical, psychological
      and sexual abuse at the hands of their husbands or partner. They have no way of escaping the marriage, or seeking 
      legal help. Sub-Saharan Africa has the highest level of child marriage, at around 40% of girls being married before
      the age of 18(UNICEF).
      </p>
      

      <p>Solutions:
        <br></br><br></br>
        Illegalize marriage of minors, even with parental permission. Increase laws protecting women in marriage from 
        domestic abuse. Enact measures to help women in unsafe situations. Globally, child marriage has decreased by 21%
        since 2016(United Nations). Enacting laws like these would lower child marriage even further. So far, many countires
        are lacking in laws to protect against child marriage, including the United States. 3 
      </p>

      <h3>Target 6</h3>
      <pre>Ensure access to reproductive health and rights</pre>
      <img align="right" src={reprodrights} width="300" height="200" style={{padding: 20}}  />

      <div className="p1">Many countries around the world lack rights for women to make their own decisions regarding their 
      reproductive systems. Africa and the Middle East have the least reproductive rights, with women unable to make their
      own decisions regarding their body. Rights like abortion, and birth control, are crucial for the health and equality 
      of women. </div>
      <p>Solutions:<br></br><br></br>
      Enact laws giving women freedom to their own bodies and systems. Laws to discourage control of reproductive healths 
      by a womens husbands. So far, many countries have enacted much of the laws needed to give women full control over their
      reproductive rights. In 2022, all United Nations countries have around 75% of all laws needed to give women full 
      reproductive rights(United Nations).
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
