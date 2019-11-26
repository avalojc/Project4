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
        this.refreshSolarSystem3()
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
    refreshSolarSystem3=()=> {
        axios.get('/api/v1/NearEarthObjects')
        .then((res)=> {
            this.setState({
                NearEarthObjectsList: res.data
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
        return (
            <div className="SolarPlane">
                Hello
            </div>
        )
    }
}

export default SolarSystem
