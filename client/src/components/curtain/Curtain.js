import React, { Component } from 'react';
import './Curtain.css'

class Curtain extends Component {
    state = {

    };

    render() {
        return (
              <div className='curtain-parent'>
            <div style={{ backgroundColor: 'green', width: '50px'}}></div>
            <div style={{ backgroundColor: 'yellow', width: '50px' }}></div>
            <div style={{ backgroundColor: 'green', width: '50px'}}></div>
             </div>
        )
    }
}

export default Curtain