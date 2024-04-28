import {useNavigate} from 'react-router-dom'
import clean from './assets/clean.jpg'
import renewable from './assets/renewable.jpg'
import bulbs from './assets/bulbs.jpg'
const Energy = () => {
    const navigate = useNavigate()
    return <>
    
    <h1><center> Goal 7: Affordable and Clean Energy </center></h1>
    <center><img src={clean} style={{
        width: 700
    }}/></center>
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
    <h3> Target 2</h3>
    <pre>Substantially increase the share of renewable energy in the global energy mix</pre>
    <img src={renewable} style={{
        width: '300px',
        float: 'right'
    }}/>
    <p className="p1">
    Increasing the usage of renewable energy globally would have both long and short term benefits, including environmental improvement, 
    energy security, and public health benefits. By reducing the usage of fossil fuels by moving to renewable sources of energy, 
    the greenhouse gas emissions brought by energy consumption can be drastically decreased, reducing pollution and mitigating climate change, 
    which would then decrease the prevelance of pollution-based repiratory diseases.
    Renewable energy can also work to reduce nations' dependence on imported fuels, which would provide higher energy security for 
    all citizens. 
    </p>
    <p>Solutions: <br></br><br></br>
    Governmental policies to incentivize renewable energy usage and increased awareness and education about renewable energy would 
    both bring high usage of renewable energy in all nations. Governmental policies may include tax incentives to encourage investment in 
    renewable energy projects or setting mandates and targets for renewable energy development. One example of government tax 
    incentives for renewable energy is the United States' federal solar tax credit, which provides homeowners 30% of the 
    cost of solar system installation, should they choose to have said installations for renewable energy. 
    </p>
    <h3> Target 3</h3>
    <img align="right" src={bulbs} style={{
        width: 300
    }}/>
    <pre>Double the global rate of improvement in energy efficiency by 2030</pre>
    <p className="p1">
        Energy efficiency is the usage of less energy to achieve the same level of service/output. Improved energy efficiency 
        is, according to the United Nations, one of the most cost-effective methods for countries to reduce greenhouse gas emissions.
    </p>
    <p>Solutions: <br></br><br></br>
    Optimizing industrial processes and utilizing energy-efficient lighting will lead to widespread improvements in energy efficiency. 
    Having Energy Management Systems (EMS) within industries which monitor, analyze, and control energy and identify opporunities for 
    improvement are one way of optimizing industrial processes for energy efficiency. Another example of industrial improvements is 
    upgrading industrial equipment to more energy-efficient models; for example, changing out old motors and boilers for newer, 
    higher-efficiency models. Using energy-efficient lighting by replacing traditional incandescent bulbs with energy-efficient lighting 
    like LED lights, as well as having lighting controls with motion sensors to optimize lighting usage can decrease the amount of energy 
    needed for lighting, and the amount of lighting used for each location.
    </p>

    <div className="navButtons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/genderequality")}>Gender Equality</button>
    <button onClick={() => navigate("/environment")}>Climate Action</button>

    </div>
    </>
}

export default Energy