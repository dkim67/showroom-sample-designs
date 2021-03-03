import React from 'react';
import './Button.css'
class Button extends React.Component {

    render() {
        const buttons = this.props.colors.map(color =>
        <button className='color-button' value={ color } style={{ backgroundColor: color }} onClick={(e) => this.props.onSelect(this.props.item, e)}></button>
    )
        return (
    < React.Fragment >
        {buttons}
       </ React.Fragment >
        )
    }
}

export default Button;