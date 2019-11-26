import React, { Component } from 'react'

export class CESItem extends Component {
    state = {
        CESId: ''
    }
    render() {
        const {
            CESId
        } = this.props;
        const CESStyle = {
            position: 'absolute',
            top: `${this.props.y_pos}px`,
            left: `${this.props.x_pos}px`,
            background: 'white',
            width: '5px',
            height: '5px',
        }

        return (

            <div className='planet' style={CESStyle} id={`ces${CESId}`}>
            </div>
        )
    }
}

export default CESItem