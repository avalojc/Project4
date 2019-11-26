import React, { Component } from 'react'
// import axios from 'axios'

export class CESItem extends Component {

    render() {

        const CESStyle = {
            position: 'absolute',
            top: this.props.y_pos,
            left: this.props.x_pos,
            background: this.props.name,
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