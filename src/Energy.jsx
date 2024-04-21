import {useNavigate} from 'react-router-dom'
const Energy = () => {
    const navigate = useNavigate()
    return <>
    
    <h1><center> Goal 7: Affordable and Clean Energy </center></h1>
    <h4>Access to affordable energy is crucial for improving people's lifestyles all around the world. This goal aims to ensure 
        reliable, sustainable, and modern energy for all. According to the UN, close to 2 billion people will still rely on 
        polluting fuels for cooking by the year 2030 if the current turbulent economic state of the world were to continue.
    </h4>
    <h3> Target 1</h3>
    <pre>Ensure universal access to affordable, reliable, and modern energy services by 2030</pre>
    <p className="p1">Providing to electricity and clean fuels would improve all aspects of life for people around the world including 
    healthcare, education, and the natural environment itself. Currently, in 2023, around 675 million people still lack access to electricity, 
    and 2.3 billion people are still cooking with unsafe fuels. </p>
    <p>Solutions: <br></br><br></br>
    Increased local and international investments in renewable energy sources and improved electricity grids would ensure more access 
    of clean energy for people all around the world. Access to electricity and clean cooking fuels is continuing to increase in the world, 
    with 91% of the global population in 2021 having access to electricity compared to 87% in 2015. However, further economic support will be 
    needed in developing countries, especially in sub-Saharan Africa, as in 7 of the 20 countries with the largest clean fuel deficits, fewer than 
    10% of the population had access to clean fuels and technologies.
    </p>
    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/environment")}>Climate Action</button>

    </div>
    </>
}

export default Energy