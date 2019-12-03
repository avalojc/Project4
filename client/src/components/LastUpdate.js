import React, { Component } from 'react'

import axios from 'axios'

export class LastUpdate extends Component {
    state = {
        LastUpdateList: []
    }
    refreshSolarSystem4=()=> {
        axios.get('/api/v1/LastUpdate')
        .then((res)=> {
            this.setState({
                LastUpdateList: res.data
            })
        })
    }

    render() {
        // const refreshSolarSystem4=()=> {
        //     axios.get('/api/v1/LastUpdate')
        //     .then((res)=> {
        //         this.setState({
        //             LastUpdateList: res.data
        //         })
        //     })
        // }
        // }onClick={refreshSolarSystem4()}
        return (
            <div className="lastupdate">
                {this.state.LastUpdateList} Name
                <button >New Time</button>
            </div>
        )
    }
}

export default LastUpdate
