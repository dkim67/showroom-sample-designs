import React, { Component } from 'react';
import axios from 'axios';
import Curtain from './components/curtain/Curtain';
import Couch from './components/couch/Couch';
import Button from './components/common/Button';
import './App.css';

class App extends Component {
  state = {
   design: {
    wall: {
        colors: {
            primary: '#FFA07A',
            secondary: '#A52A2A'
        }
    },
    curtain: {
        colors: {
            primary: '#008000',
            secondary: '#228B22'
        }
    },
    couch: {
        colors: {
            primary: '#FF0000',
            secondary: '#FF7F50'
        }
    },
    floor: {
        colors: {
            primary: '#000080'
        }
    }
    },
    showMessage: false,
  };

  

  onSelectWallColor = (item, e) => {
    if (item === 'primary') {
      this.setState(prevState => ({
        design: {
          ...prevState.design,
          wall: {
            ...prevState.design.wall,
            colors: {
              ...prevState.design.wall.colors,
              primary: e.target.value
            }
          }
        }
      }))
    } else if (item === 'secondary') {
      this.setState(prevState => ({
        design: {
          ...prevState.design,
          wall: {
            ...prevState.design.wall,
            colors: {
              ...prevState.design.wall.colors,
              secondary: e.target.value
            }
          }
        }
      }))
    }
  };
  
  
  onSelectCurtainColor = (item, e) => {
    if (item === 'primary') {
      this.setState(prevState => ({
        design: {
          ...prevState.design,
          curtain: {
            ...prevState.design.curtain,
            colors: {
              ...prevState.design.curtain.colors,
              primary: e.target.value
            }
          }
        }
      }))
    } else if (item === 'secondary') {
      this.setState(prevState => ({
        design: {
          ...prevState.design,
          curtain: {
            ...prevState.design.curtain,
            colors: {
              ...prevState.design.curtain.colors,
              secondary: e.target.value
            }
          }
        }
      }))
    };
  };

  onSelectCouchColor = (item, e) => {
    if (item === 'primary') {
      this.setState(prevState => ({
        design: {
          ...prevState.design,
          couch: {
            ...prevState.design.couch,
            colors: {
              ...prevState.design.couch.colors,
              primary: e.target.value
            }
          }
        }
      }))
    } else if (item === 'secondary') {
      this.setState(prevState => ({
        design: {
          ...prevState.design,
          couch: {
            ...prevState.design.couch,
            colors: {
              ...prevState.design.couch.colors,
              secondary: e.target.value
            }
          }
        }
      }))
    };
  };
  
  onSelectFloorColor = (item, e) => {
    this.setState(prevState => ({
      design: {
        ...prevState.design,
        floor: {
          ...prevState.design.floor,
          colors: {
            ...prevState.design.floor.colors,
            primary: e.target.value
          }
        }
      },
    }))
  
  };
  
  onSave = () => {
    axios.post(`/api/product`, this.state.design)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          showMessage: true
        }, () => {
            setTimeout(() => {
              this.setState({
                showMessage: false
              })
            }, 10000)
        })
      })
  };
  
  render() {

    const { design } = this.state;
    const wallPrimaryColors = ['#FFA07A', '#C0C0C0', '#8B4513'];
    const wallSecondaryColors = ['#A52A2A', '#000000', '#F5C71A'];
    const curtainPrimaryColors = ['#008000', '#800080', '#8b0000'];
    const curtainSecondaryColors = ['#228B22', '#d8bfd8', '#ff5349'];
    const couchPrimaryColors = ['#FF0000', '#0000ff', '#74c365'];
    const couchSecondaryColors = ['#FF7F50', '#4682b4', '#c5e384'];
    const floorPrimaryColors = ['#000080', '#867e36', '#5f9ea0'];

    return (
      <div className="App">
        <div className='wall' style={{ backgroundColor: design.wall.colors.primary }}>
          <Curtain primary={design.curtain.colors.primary} secondary={design.curtain.colors.secondary} />
         <Couch primary={design.couch.colors.primary} secondary={design.couch.colors.secondary}/>
        </div>
        <div className='base' style={{ height: '25px', backgroundColor: design.wall.colors.secondary }}></div>
        <div className='floor' style={{ borderBottom: `100px solid ${design.floor.colors.primary}` }}></div>
           
        <p className='pallete-title'>Wall</p>
        <div className='color-palette'>
          <p style={{ marginRight: '10px' }}>Primary:</p>
          <Button colors={wallPrimaryColors} item='primary' onSelect={ this.onSelectWallColor }/>
          <p style={{ marginLeft: '25px', marginRight: '10px' }}>Secondary:</p>
          <Button colors={ wallSecondaryColors } item='secondary' onSelect={ this.onSelectWallColor }/>
        </div>
        
        <p className='pallete-title'>Curtain</p>
        <div className='color-palette'>
          <p style={{ marginRight: '10px' }}>Primary:</p>
          <Button colors={curtainPrimaryColors} item='primary' onSelect={ this.onSelectCurtainColor }/>
          <p style={{ marginLeft: '25px', marginRight: '10px' }}>Secondary:</p>
          <Button colors={ curtainSecondaryColors } item='secondary' onSelect={ this.onSelectCurtainColor }/>
        </div>
        
        <p className='pallete-title'>Couch</p>
        <div className='color-palette'>
          <p style={{ marginRight: '10px' }}>Primary:</p>
          <Button colors={couchPrimaryColors} item='primary' onSelect={ this.onSelectCouchColor }/>
          <p style={{ marginLeft: '25px', marginRight: '10px' }}>Secondary:</p>
          <Button colors={ couchSecondaryColors } item='secondary' onSelect={ this.onSelectCouchColor }/>
        </div>
         
        <p className='pallete-title'>Floor</p>
        <div className='color-palette'>
          <p style={{ marginRight: '10px' }}>Primary:</p>
          <Button colors={floorPrimaryColors} item='primary' onSelect={ this.onSelectFloorColor }/>
        </div>
        <div>
          <button onClick={this.onSave}>Save Theme</button>
          <p>{ this.state.showMessage ? 'Theme has been successfully saved!': ''}</p>
          </div>
      </div>
    );
  }
};

export default App;



