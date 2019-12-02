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
    refreshSolarSystem0 = (kepId) => {
        axios.get(`/api/v1/KeplerianElements/${this.props.kepId}`, kepId) /////////need to make it id specific
            .then((res) => {
                this.setState({
                    KeplerianElementsList: res.data
                })
            })
    }



    kepMathVars = () => {
        //set the givens
        let axd = parseFloat(this.props.axd)
        let axs = parseFloat(this.props.axs)
        let ecd = parseFloat(this.props.ecd)
        let ecs = parseFloat(this.props.ecs)
        let ind = parseFloat(this.props.ind)
        let ins = parseFloat(this.props.ins)
        let lgd = parseFloat(this.props.lgd)
        let lgs = parseFloat(this.props.lgs)
        let phd = parseFloat(this.props.phd)
        let phs = parseFloat(this.props.phs)
        let and = parseFloat(this.props.and)
        let ans = parseFloat(this.props.ans)
        //whats the julian date
        // let Teph = 
        let Tval = -3543
        //values
        let axv = axs + axd * Tval                          //Need to solve for units 
        let ecv = ecs + ecd * Tval                          //this is in radians?
        let inv = ins + ind * Tval                          //deg
        let lgv = (lgs + lgd * Tval)%360+360                        //deg
        let phv = phs + phd * Tval                        //deg
        let anv = ans + and * Tval                          //deg
        let valE0 = lgv + 180/Math.PI*ecv * Math.sin(lgv) * (1 + ecv * Math.cos(lgv))
        let valE1 = valE0 - (valE0 - 180/Math.PI*ecv * Math.sin(valE0) - lgv) / (1 - ecv * Math.cos(valE0))
        console.log("0:"+valE0)
        console.log("1:"+valE1)


    }



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
    // }


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
            <div className={this.props.name} style={KepItemStyle} >
            </div>
        )
    }
}

export default KepItem