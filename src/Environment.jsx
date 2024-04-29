import {useNavigate} from 'react-router-dom'

import tornado from './assets/tornado.jpeg'
import tornadohiding from './assets/tornadohiding.jpeg'
import climatechange from './assets/climatechange.jpeg'

const Environment = () => {
    const navigate = useNavigate()
    return <>
    
    <h1><center> Goal 13: Climate Action </center></h1>


    
    <h4>The Earths atmosphere and surface has slowly been deteriorating due to the actions of humans. Greenhouse gases,
        like methane or carbon dioxide have torn holes in the ozone layer, and have contributed to overall air pollution. 
        Causing increased health issues around the world. It also causes the climate of the Earth to fluctuate. Which can 
        result in droughts, wildfires, flooding, heatwaves and famine. 
        According to the United Nations Sustainable Development goals, Carbon Emissions have to be halved by 2030, but most 
        countries have been unable to do so. 
    </h4>

   <h3>Target 1</h3>
   

    <pre>Have the ability to adequately adapt to climate hazards and natural disasters</pre>
    <img align="right" src={tornado} width="300" height="200" style={{padding: 20}}  />

    <p className="p1"> Natural Disasters happen in every country on Earth. Whether it be the East Coast of the US with hurricanes,
     or Earthquakes in China. Many countries are unable to adequately come back from natural disasters. The Indian Ocean Tsunami hit
     countless countries in South and South East Asia, including Indonesia, but also in, India, Malaysia, Singapore, Sri Lanka, and 
     Thailand. It has taken countless years to rebuild from the damage. Cities are demolished, lives are lost, and families are ruined 
     due to unadequate preparation to climate disasters.</p>


     <p>Solutions: <br></br><br></br>

     Policies to lead people after and during disasters. Policies to help locate and help the missing and injured would greatly reduce 
     deaths. Policies to ensure the quick building of hospitals to treat the injured. So far the amount of injuries and deaths due to 
     natural disasters has decreased over the last 10 years. Average mortality due to disasters has decreased, but the amount affected 
     has increased. Many countries have adopted policies or strategies to help with the prevention and managing of natural disasters.
     </p>

    <h3>Target 2</h3>    
    <pre>Adopt measures to prevent or slow climate change </pre>
    <img align="right" src={climatechange} width="300" height="200" style={{padding: 20}}  />

    <p className="p1">Climate Change is the change in global temperature and weather patterns. The worlds temperature has risen over the 
    past few years. In part of Green House gass emissions, which is the emissions of gases like carbon dioxide and methane. These gases
    mix into the atmosphere and create a green house effect. Trapping heat from the sun on Earth. This streamlines the melting of iceburgs,
    which can flood the shores of coastal and island nations. </p>

    <p>Solutions:<br></br><br></br>
    Convert electricity production methods from non-renewable methods like fossil fuels to renewable methods. There are many renewable energy 
    methods, including nuclear, wind and hydroelectric. Nuclear is very expensive to build and maintain, and can cause catastrophes like 
    Chernobyl. Wind energy is more affordable, but is expensive to set up. Hydroelectric is the best option.
    </p>

    <h3>Target 3</h3>
    <img align="right" src={tornadohiding} width="300" height="200" style={{padding: 20}}  />

    <pre>Improve awareness of how to deal with natural disasters and how to prepare for them</pre>
    <p className="p1"> When faced with natural disasters many people are unprepared or unaware. 3000 people During the 1906 San Francisco
     Earthquake, many due to lack of knowledge on how to adequately protect oneself. Knowledge on how to properly protect a persons body during
     and earthquake or how to evacuate during a fire. </p>

    <p>Solutions:<br></br><br></br>
        Implement information on how to protect oneself during natural disasters and how to see the warning signs. Earthquake and fire drills
        in schools would teach kids on how to protect themselves. While these drills are very common in sone countries, like the United States,
        they're not as commonplace in other countries. Adding these teachings would reduce deaths by natural disasters.
    </p>

    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/energy")}>Affordable and Clean Energy</button>
    </div>
    </>
}

export default Environment