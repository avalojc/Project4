import React, { Component } from 'react'
// import axios from 'axios'

export class CESItem extends Component {

    render() {

        const CESStyle = {
            position: 'absolute',
            top: `${this.props.y_pos}px`,
            left: `${this.props.x_pos}px`,
            background: 'white',
            width: '5px',
            height: '5px',
        }
        return (
            <div className='planet' style={CESStyle}>
            </div>
        )
    }
}

export default CESItem