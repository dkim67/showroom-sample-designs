import React, { Component } from 'react';
import './Couch.css';

class Couch extends Component {
    state = {

    };

    render() {
        return (
            <div className='couch'>
            <div style={{ backgroundColor: 'blue', width: '50px', height: '75px', marginTop: '25px'}}></div>
            <div style={{ backgroundColor: '#00008B', width: '250px'}}></div>
            <div style={{ backgroundColor: 'blue', width: '50px', marginTop: '25px'}}></div>
             </div>
        )
    }
}

export default Couch;