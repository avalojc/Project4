import React, { Component } from 'react'
import axios from 'axios'

export class KepItem extends Component {
    state = {
        KeplerianElementsList: [],
        set_x: "",
        set_y: 100,
    }
    componentDidMount() {
        this.refreshSolarSystem0()
        this.kepMathVars()

    }
    refreshSolarSystem0=(kepId)=> {
        axios.get(`/api/v1/KeplerianElements/${this.props.kepId}`, kepId) /////////need to make it id specific
        .then((res)=> {
            this.setState({
                KeplerianElementsList: res.data
            })
        })
    }



    kepMathVars=()=>{
        //set the givens
        let axd = parseFloat(this.props.axd)
        let axs = parseFloat(this.props.axs)
        let ecd = parseFloat(this.props.ecd )
        let ecs = parseFloat(this.props.ecs )
        let ind = parseFloat(this.props.ind )
        let ins = parseFloat(this.props.ins )
        let lgd = parseFloat(this.props.lgd )
        let lgs = parseFloat(this.props.lgs )
        let phd = parseFloat(this.props.phd )
        let phs = parseFloat(this.props.phs )
        let and = parseFloat(this.props.and )
        let ans = parseFloat(this.props.ans)
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
        let capM = (lgs+(lgd*Tval)) - (phs + (phd * Tval))
        let ModCapM = capM%360                              //this is in degrees
        let ecvDegree = ecv * 180 / Math.PI                 //this is in degrees
        // let i 
        // let valE
        // for (i=0; i< 5; i++){
        //     // let valE0 = ModCapM + ecvDegree * Math.sin(ModCapM) * (1+ ecv * Math.cos(ModCapM))
        //     // let valE1 = valE0 - (valE0 - ecvDegree * Math.sin(valE0)-ModCapM)/(1-ecv* Math.cos(valE0))
        //     // let valMath = valE1-valE0
        //     // console.log('test')
        //     // if (valMath<Math.abs(.05)){console.log(i)}
        //     console.log("this is loop"+i+"of 5")
        // }
        // let ModCapMR = ModCapM * Math.PI / 180              //this is in radians
        // // solve for E make this loop
        //compute x and y coordinates
        // let xdirection = 1
        // //axv * (Math.cos(valE)-ecv)
        // let ydirection = 1 
        // //axv * (Math.sqrt(1-ecv*ecv)) * (Math.sin(valE))

        // .then.setState({
        //     set_x: xdirection, 
        //     set_y: ydirection,
        // })
    }


    render() {
        const KepItemStyle = {
            position: 'absolute',
            top: `${this.state.set_y}px`,
            left: `${this.state.set_x}px`,
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