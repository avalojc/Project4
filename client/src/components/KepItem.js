import React, { Component } from 'react'
// import axios from 'axios'

export class KepItem extends Component {

    render() {
        kepMathVars = () => {
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
            let ecv = ecs + ecd * Tval
            let inv = ins + ind * Tval
            let lgv = lgs + lgd * Tval
            let phv = phs + phd * Tval
            let anv = ans + and * Tval
            let uuv = phv - anv
            let CapM = lgv - phv
            console.log(CapM)
            }
        kepMathVars()
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