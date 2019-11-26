import React, { Component } from 'react'
// import {    Link  } from "react-router-dom";
import axios from 'axios'

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
        // this.refreshSolarSystem3()
        this.refreshSolarSystem4()
        console.log('yeet')
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
    // refreshSolarSystem3=()=> {
    //     axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=IeIThUz54Ih7TJSiKGz0WNhSbAJf0CdTTD1HcOaV')
    //     .then((res)=> {
    //         this.setState({
    //             NearEarthObjectsList: res.data
    //         })
    //     })
    // }
    refreshSolarSystem4=()=> {
        axios.get('/api/v1/LastUpdate')
        .then((res)=> {
            this.setState({
                LastUpdateList: res.data
            })
        })
    }
    render() {
        console.log('yeet2')
        // const milesToAUToPx = 92960000*20
        const mercuryAU =   35980000/92960000*20
        const venusAU =     67240000/92960000*20
        const earthAU =     92960000/92960000*20
        const marsAU =     141600000/92960000*20
        const jupiterAU =  483800000/92960000*20
        const saturnAU =   890800000/92960000*20
        const uranusAU =  1784000000/92960000*20
        const neptuneAU = 2793000000/92960000*20
        const plutoAU =   3670050000/92960000*20
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

        const sunStyle = {
            position: 'relative',
            top: '400px',
            left: '100px',
            background: 'yellow',
            width: '1px',
            height: '1px',
          }

        const mercuryStyle = {
            position: 'absolute',
            top: '0px',
            left: mercuryAU,
            background: 'grey',
            width: '1px',
            height: '1px',
        }
        const venusStyle = {
            position: 'absolute',
            top: '0px',
            left: venusAU,
            background: 'yellow',
            width: '1px',
            height: '1px',
        }
        const earthStyle = {
            position: 'absolute',
            top: '0px',
            left: earthAU,
            background: 'green',
            width: '1px',
            height: '1px',
        }
        const marsStyle = {
            position: 'absolute',
            top: '0px',
            left: marsAU,
            background: 'red',
            width: '1px',
            height: '1px',
        }
        const jupiterStyle = {
            position: 'absolute',
            top: '0px',
            left: jupiterAU,
            background: 'orangered',
            width: '1px',
            height: '1px',
        }
        const saturnStyle = {
            position: 'absolute',
            top: '0px',
            left: saturnAU,
            background: 'orange',
            width: '1px',
            height: '1px',
        }
        const uranusStyle = {
            position: 'absolute',
            top: '0px',
            left: uranusAU,
            background: 'violet',
            width: '1px',
            height: '1px',
        }
        const neptuneStyle = {
            position: 'absolute',
            top: '0px',
            left: neptuneAU,
            background: 'blue',
            width: '1px',
            height: '1px',
        }
        const plutoStyle = {
            position: 'absolute',
            top: '0px',
            left: plutoAU,
            background: 'purple',
            width: '1px',
            height: '1px',
        }
        const astroidStyle = {
            background: 'white'
        }

        return (
            <div className='SolarPlane'>
                <div id='Sun' style={sunStyle}>
                    <div id='Mercury' style={mercuryStyle}></div>
                    <div id='Venus' style={venusStyle}></div>
                    <div id='Earth' style={earthStyle}></div>
                    <div id='Mars' style={marsStyle}></div>
                    <div id='Jupiter' style={jupiterStyle}></div>
                    <div id='Saturn' style={saturnStyle}></div>
                    <div id='Uranus' style={uranusStyle}></div>
                    <div id='Neptune' style={neptuneStyle}></div>
                    <div id='Pluto' style={plutoStyle}></div>
                </div>
            </div>
        )
    }
}

export default SolarSystem


  