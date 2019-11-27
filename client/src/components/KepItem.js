import React, { Component } from 'react'
import axios from 'axios'

export class KepItem extends Component {
    state = {
        KeplerianElementsList: [],
    }
    componentDidMount() {
        this.refreshSolarSystem0()

    }
    refreshSolarSystem0=(kepId)=> {
        axios.get(`/api/v1/KeplerianElements/${this.props.kepId}`, kepId) /////////need to make it id specific
        .then((res)=> {
            this.setState({
                KeplerianElementsList: res.data
            })
        })
    }

    kepMathVars(){
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
        let Teph = 2458814.0328125
        let Tval = Teph - 2451545.0
        let axv = axs + axd * Tval
        let ecv = ecs + ecd * Tval //this is in radians
        let inv = ins + ind * Tval
        let lgv = lgs + lgd * Tval
        let phv = phs + phd * Tval
        let anv = ans + and * Tval
        let uuv = phv - anv
        let CapM = lgv - phv
        let ModCapM = (CapM%360)
        let ModCapMInRadians = ModCapM * Math.PI / 180
        let ecvDegree = ecv * 180 / Math.PI
        let valE0 = ModCapM + ecvDegree * Math.sin(ModCapM) * (1+ ecv * Math.cos(ModCapM))
        let valE1 = valE0 - (valE0 - ecvDegree * Math.sin(valE0)-ModCapM)/(1-ecv* Math.cos(valE0))
        // let valE2 = yeet2
        // let valE3 = yeet3
        let x = axv * (Math.cos(valE1)-ecv)
        let y = axv * Math.sqrt(1-ecv*ecv) * Math.sin(valE1)



        // let eStar = 57.29578*ecv //this is in degrees
        // let t34 = ecv *ecv
        // let t35 = ecv* t34
        // let t33 = Math.cos(ModCapMInRadians)
        // let keplerStart = ModCapMInRadians + (-1/2*t35+ecv+(t34+3/2*t33*t35)*Math.sin(ModCapMInRadians))
        // let eps1 = (x-ecv*Math.sin(x)-ModCapMInRadians)/(1-ecv*Math.cos(x))
        // let x=0
        // let xprime = axv*Math.cos(CapE-ecv)
        // let yprime = axv*Math.sqrt(1-ecv*ecv)*Math.sin(CapE)
        // let zprime = 0







        }
        // console.log({kepMathVars})

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