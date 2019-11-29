import React, { Component } from 'react'
import axios from 'axios'

export class KepItem extends Component {
    state = {
        KeplerianElementsList: [],
    }
    componentDidMount() {
        this.refreshSolarSystem0()

    }
    refreshSolarSystem0=(Id)=> {
        axios.get(`/api/v1/KeplerianElements/${this.props.Id}`, Id) /////////need to make it id specific
        .then((res)=> {
            this.setState({
                KeplerianElementsList: res.data
            })
        })
    }

    kepMathVars(){
        //givens
        let axd = this.props.semi_major_axis_diacritic
        let axs = this.props.semi_major_axis_subscript
        let ecd = this.props.eccentricity_diacritic 
        let ecs = this.props.eccentricity_subscript 
        let ind = this.props.inclination_diacritic 
        let ins = this.props.inclination_subscript 
        let lgd = this.props.mean_longitude_diacritic 
        let lgs = this.props.mean_longitude_subscript 
        let phd = this.props.longitude_of_perihelion_diacritic 
        let phs = this.props.longitude_of_perihelion_subscript 
        let and = this.props.longitude_of_the_ascending_node_diacritic 
        let ans = this.props.longitude_of_the_ascending_node_subscript
        //whats the julian date
        let Teph = 2458814.0328125
        let Tval = Teph - 2451545.0
        //values
        let axv = axs + axd * Tval                          //AU
        let ecv = ecs + ecd * Tval                          //this is in radians
        let inv = ins + ind * Tval                          //deg
        let lgv = lgs + lgd * Tval                          //deg
        let phv = phs + phd * Tval                          //deg
        let anv = ans + and * Tval                          //deg
        let uuv = phv - anv
        //modulus
        let CapM = lgv - phv
        let ModCapM = (CapM%360)                            //this is in degrees
        let ModCapMR = ModCapM * Math.PI / 180              //this is in radians
        //solve for E make this loop
        let ecvDegree = ecv * 180 / Math.PI                 //this is in degrees
        let valE0 = ModCapM + ecvDegree * Math.sin(ModCapM) * (1+ ecv * Math.cos(ModCapM))
        let valE1 = valE0 - (valE0 - ecvDegree * Math.sin(valE0)-ModCapM)/(1-ecv* Math.cos(valE0))
        // let valE2 = yeet2
        // let valE3 = yeet3
        //compute x and y coordinates
        let xdirection = axv * (Math.cos(valE1)-ecv)
        let ydirection = axv * Math.sqrt(1-ecv*ecv) * Math.sin(valE1)








        }


    render() {
        const KepItemStyle = {
            position: 'absolute',
            top: `${this.props.y_pos}px`,
            left: `${this.props.x_pos}px`,
            background: 'white',
            width: '5px',
            height: '5px',
        }

        return (
            <div className='kepItem' style={KepItemStyle}>
            </div>
        )
    }
}

export default KepItem