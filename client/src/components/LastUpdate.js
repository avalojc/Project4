import React, { Component } from 'react'

import axios from 'axios'

export class LastUpdate extends Component {
    state = {
        LastUpdateList: [],
        newUpdate: '',
    }
    refreshSolarSystem4=()=> {
        axios.get('/api/v1/LastUpdate')
        .then((res)=> {
            this.setState({
                LastUpdateList: res.data
            })
        })
    }
    createUpdateTime=()=> {
        const newUpdate = {
            date: 'test'
        };
        axios.post('/api/v1/LastUpdate/', newUpdate)
    }
    onNewUpdateAdd = (event) => {
        const newUpdate = event.target.value;
        this.setState({newUpdate: newUpdate})
    }

    render() {
        return (
            <div className="lastupdate">
                {this.state.LastUpdateList} Update Last Refresh of Positional Data
                <button onClick={() => this.createUpdateTime()} value={this.state.newUpdate}>Update</button>
            </div>
        )
    }
}

export default LastUpdate
