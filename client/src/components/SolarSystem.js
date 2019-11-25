import React, { Component } from 'react'
import {    Link  } from "react-router-dom";
import axios from 'axios'

export class SolarSystem extends Component {
    state = {
        planetList: [],
    }
    componentDidMount() {
        this.refreshSolarSystem()
    }
    refreshSolarSystem=()=> {
        axios.get
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default SolarSystem
