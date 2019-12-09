import React, { Component } from 'react'


export class NearEarthObjects extends Component {
    state = {
        NearEarthObjectsList: [],
        set_x: "",
        set_y: 100,
        set_z: "",
        orbiting_body: ""
    }
    componentDidMount() {
         this.kepMathVars()
    }




    kepMathVars = () => {
        //set the unknown
        let phv = 0
        //whats the julian date
        //step 1
        let axv = parseFloat(this.props.axv)
        let ecv = parseFloat(this.props.ecv)
        let inv = parseFloat(this.props.inv)                          //deg
        let anv = parseFloat(this.props.anv)                          //deg
        //bonus var for step 3 
        let ecvStar = ecv * 180 / Math.PI
        //step 2
        let uuv = phv - anv
        let capitalM = parseFloat(this.props.capitalM)
        //step 3
        let capitalMModulus = capitalM%360-180
        let functional=(x)=>{
            if (x <= -180) { return x + 360  }
            else {return x}
        }
        let meanAnomalyBetweenN180And180 = functional(capitalMModulus)

        let keplersEquation=(Mval, echoStar, echo, )=>{
        let valE0 = Mval + echoStar * Math.sin(Mval)
        let deltaMeanAnomaly = Mval-(valE0-echoStar*Math.sin(valE0))
        let deltaE = deltaMeanAnomaly/ (1-echo*Math.cos(valE0))
        let valE1 = valE0 + deltaE
        console.log(deltaE)
        if(Math.abs(valE1-valE0)<!.05){
            valE0=valE1
            deltaMeanAnomaly = Mval-(valE0-echoStar*Math.sin(valE0))
            deltaE = deltaMeanAnomaly/ (1-echo*Math.cos(valE0))
            valE1 = valE0 + deltaE
            if(Math.abs(valE1-valE0)<!.05){
                valE0=valE1
                deltaMeanAnomaly = Mval-(valE0-echoStar*Math.sin(valE0))
                deltaE = deltaMeanAnomaly/ (1-echo*Math.cos(valE0))
                valE1 = valE0 + deltaE
                if(Math.abs(valE1-valE0)<!.05){
                    valE0=valE1
                    deltaMeanAnomaly = Mval-(valE0-echoStar*Math.sin(valE0))
                    deltaE = deltaMeanAnomaly/ (1-echo*Math.cos(valE0))
                    valE1 = valE0 + deltaE
                    return valE1
                }
                else{return valE1}
            }
            else{return valE1}
        }
        else{return valE1}
    }
        let valueOfE = keplersEquation(meanAnomalyBetweenN180And180, ecvStar, ecv)
        //step four
        let xPrime = axv*(Math.cos(valueOfE)-ecv)
        let yPrime = axv*(Math.sqrt(1-ecv*ecv))*Math.sin(valueOfE)
        // let zPrime = 0
        //step 5
        let xecl = ( (Math.cos(uuv)*Math.cos(anv)-Math.sin(uuv)*Math.sin(anv)*Math.cos(inv))*xPrime+ ((-Math.sin(uuv)*Math.cos(anv)-Math.cos(uuv)*Math.sin(anv)*Math.cos(inv))*yPrime))
        let yecl = ( (Math.cos(uuv)*Math.cos(anv)+Math.sin(uuv)*Math.sin(anv)*Math.cos(inv))*xPrime+ ((-Math.sin(uuv)*Math.sin(anv)-Math.cos(uuv)*Math.cos(anv)*Math.cos(inv))*yPrime))
        let zecl = ( (Math.sin(uuv)*Math.sin(inv))                                          *xPrime+ ((Math.cos(uuv)*Math.sin(inv))                                                  *yPrime))

        //step 6
        let epsilon = 23.43928
        let xeq = xecl
        let yeq = Math.cos(epsilon) * yecl - Math.sin(epsilon)*zecl
        let zeq = Math.sin(epsilon) * yecl + Math.cos(epsilon)*zecl
        //convert from au to px
        this.setState({
            set_x: xeq*80,
            set_y: yeq*80,
            set_z: zeq*80,
            orbiting_body: this.props.orbitingbody
        })
    
    }



    render() {
        const NearEarthItemStyle = {
            position: 'absolute',
            top: `${this.state.set_y}px`,
            left: `${this.state.set_x}px`,

        }

        return (
            <div className={`NEO ${this.props.name}`}  style={NearEarthItemStyle} >
            </div>
        )
    }
}

export default NearEarthObjects