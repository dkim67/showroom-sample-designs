import React from 'react';

class Button extends React.Component {

    render() {
        const buttons = this.props.colors.map(color =>
        <button value={ color } style={{ backgroundColor: color, width: '100px', height: '50px', cursor: 'pointer'}} onClick={(e) => this.props.onSelect(this.props.item, e)}></button>
    )
        return (
    < React.Fragment >
        {buttons}
       </ React.Fragment >
        )
    }
}

export default Button;