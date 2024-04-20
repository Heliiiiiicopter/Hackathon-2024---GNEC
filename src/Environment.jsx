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
     Thailand. It has taken countless years to rebuild </p>
    <p></p>
    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/responsible")}>Responsible Consumption/Production</button>
    </div>
    </>
}

export default Environment