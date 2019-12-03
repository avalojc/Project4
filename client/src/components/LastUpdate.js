import React, { Component } from 'react'
import {    Link  } from "react-router-dom";
import axios from 'axios'

export class LastUpdate extends Component {
    state = {
        
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
        return (
            <div className="lastupdate">
                {this.state.LastUpdateList} Name
                <button onClick="refreshSolarSystem4()">New Time</button>
            </div>
        )
    }
}

export default LastUpdate
