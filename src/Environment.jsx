import {useNavigate} from 'react-router-dom'
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

    <h3> Target 1</h3>
    <pre>Have the ability to adequately adapt to climate hazards and natural disasters</pre>
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
    <p className="p1"></p>
    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/responsible")}>Responsible Consumption/Production</button>
    </div>
    </>
}

export default Environment