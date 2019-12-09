import React, { Component } from 'react'
// import {    Link  } from "react-router-dom";
import axios from 'axios'
import CESItem from './CESItem'
import KepItem from './KepItem'
import NearEarthObjects from './NearEarthObjects'
// import LastUpdate from './LastUpdate'

export class SolarSystem extends Component {
    state = {
        planetList: [],
        CESList: [],
        KeplerianElementsList: [],
        NearEarthObjectsList: [],
        LastUpdateList: [],
    }
    componentDidMount() {
        this.refreshSolarSystem0()
        this.refreshSolarSystem1()
        this.refreshSolarSystem2()
        this.refreshSolarSystem3()
        this.refreshSolarSystem4()
    }
    refreshSolarSystem0=()=> {
        axios.get('/api/v1/Planet')
        .then((res)=> {
            this.setState({
                planetList: res.data
            })
        })
    }
    refreshSolarSystem1=()=> {
        axios.get('/api/v1/CESBody')
        .then((res)=> {
            this.setState({
                CESList: res.data
            })
        })
    }
    refreshSolarSystem2=()=> {
        axios.get('/api/v1/KeplerianElements')
        .then((res)=> {
            this.setState({
                KeplerianElementsList: res.data
            })
        })
    }
    refreshSolarSystem3=()=> {
        axios.get('http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=IeIThUz54Ih7TJSiKGz0WNhSbAJf0CdTTD1HcOaV')
        .then((res)=> {
            this.setState({
                NearEarthObjectsList: res.data.near_earth_objects
            })
        })
    }
    refreshSolarSystem4=()=> {
        axios.get('/api/v1/LastUpdate')
        .then((res)=> {
            this.setState({
                LastUpdateList: res.data
            })
        })
    }

    render() {
        // const milesToAUToPx = 92960000*20
        // avg distance of major bodies
        const mercuryAU =   35980000/92960000*20
        const venusAU =     67240000/92960000*20
        const earthAU =     92960000/92960000*20
        const marsAU =     141600000/92960000*20
        const jupiterAU =  483800000/92960000*20
        const saturnAU =   890800000/92960000*20
        const uranusAU =  1784000000/92960000*20
        const neptuneAU = 2793000000/92960000*20
        const plutoAU =   3670050000/92960000*20
        // diameters of major bodies
        // const sunD =      864340/92960000*20
        // const mercuryD =    3031.9/92960000*20
        // const venusD =      7520.8/92960000*20
        // const earthD =      7917.5/92960000*20
        // const marsD =       4212.3/92960000*20
        // const jupiterD =   86881/  92960000*20
        // const saturnD =    72367/92960000*20
        // const uranusD =    31518/92960000*20
        // const neptuneD =   30599/92960000*20
        // const plutoD =      1476.8/92960000*20
        // center the sun
        const sunStyle = {
            position: 'relative',
            top: '800px',
            left: '800px',
            background: 'yellow',
            width: '1px',
            height: '1px',
          }
        const mercuryStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            display: 'flex',
            left: mercuryAU,
            background: 'rgba(255, 255, 255, .5)',

        }
        const venusStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: venusAU,
            background: 'rgba(255,255,0,.5)',
        }
        const earthStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: earthAU,
            background: 'rgba(0,0,255,.5)',
        }
        const marsStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: marsAU,
            background: 'red',
        }
        const jupiterStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: jupiterAU,
            background: 'orangered',
        }
        const saturnStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: saturnAU,
            background: 'orange',
        }
        const uranusStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: uranusAU,
            background: 'purple',
        }
        const neptuneStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: neptuneAU,
            background: 'green',
        }
        const plutoStyle = {
            position:'absolute',top:'0px',width:'1px',height:'15px',
            left: plutoAU,
            background: 'violet',
        }


        const CESListElements = this.state.CESList.map((celestial) => {
            return(
                <CESItem
                    key={celestial.id}
                    CESId={celestial.id}
                    name={celestial.name}
                    velocity={celestial.velocity}
                    x_pos={celestial.x_pos}
                    y_pos={celestial.y_pos}
                    z_pos={celestial.z_pos}
                />
            )
        })
        const KepListElements = this.state.KeplerianElementsList.map((kep) => {
            return(
                <KepItem
                    key={kep.id}
                    kepId={kep.id}
                    name={kep.name}
                    x_pos={kep.x_pos}
                    y_pos={kep.y_pos}
                    z_pos={kep.z_pos}
                    axd = {kep.semi_major_axis_diacritic}
                    axs = { kep.semi_major_axis_subscript}
                    ecd = { kep.eccentricity_diacritic }
                    ecs = { kep.eccentricity_subscript }
                    ind = { kep.inclination_diacritic }
                    ins = { kep.inclination_subscript }
                    lgd = { kep.mean_longitude_diacritic }
                    lgs = { kep.mean_longitude_subscript }
                    phd = { kep.longitude_of_perihelion_diacritic }
                    phs = { kep.longitude_of_perihelion_subscript }
                    and = {kep.longitude_of_the_ascending_node_diacritic }
                    ans = {kep.longitude_of_the_ascending_node_subscript}
                />
            )
        })


        const NearEarthObjectElements = this.state.NearEarthObjectsList.map((nearEarth) => {
            return(
                <NearEarthObjects
                    key={nearEarth.id}
                    nearEarthId={nearEarth.id}
                    name={nearEarth.name}
                    x_pos={nearEarth.orbital_data.x_pos}
                    y_pos={nearEarth.orbital_data.y_pos}
                    z_pos={nearEarth.orbital_data.z_pos}
                    axv = {nearEarth.orbital_data.semi_major_axis}
                    ecv = {nearEarth.orbital_data.eccentricity}
                    inv = {nearEarth.orbital_data.inclination}
                    capitalM = {nearEarth.orbital_data.mean_anomaly }
                    anv = {nearEarth.orbital_data.ascending_node_longitude }
                    orbitingbody = {nearEarth.close_approach_data[0]}
                />
            )
        })
        return (
            <div className='SolarPlane' >
                <div className='welcomeBar'><h1>Welcome to the Solar Field</h1>
                <p>Below is a scale model of our solar system(20px to 1AU). It uses NASA's open API to position Near Earth Objects using Kepler's Equation.</p>
                <p>The colored bars signify the average distance of the planets (including pluto) from the Sun.<br></br>
                grey:Mercury, yellow:Venus, blue:Earth, red:Mars, orange:Jupiter, orange:Saturn, purple:Uranus, green:Neptune, violet:Pluto.</p>
                </div>
                <div id='Sun' style={sunStyle}>
                    {CESListElements}
                    {KepListElements}
                    {NearEarthObjectElements}
                    <div className='StaticPlanet' id='Mercury' style={mercuryStyle}></div>
                    <div className='StaticPlanet' id='Venus' style={venusStyle}></div>
                    <div className='StaticPlanet' id='Earth' style={earthStyle}></div>
                    <div className='StaticPlanet' id='Mars' style={marsStyle}></div>
                    <div className='StaticPlanet' id='Jupiter' style={jupiterStyle}></div>
                    <div className='StaticPlanet' id='Saturn' style={saturnStyle}></div>
                    <div className='StaticPlanet' id='Uranus' style={uranusStyle}></div>
                    <div className='StaticPlanet' id='Neptune' style={neptuneStyle}></div>
                    <div className='StaticPlanet' id='Pluto' style={plutoStyle}></div>
                </div>
            </div>
        )
    }
}

export default SolarSystem


  