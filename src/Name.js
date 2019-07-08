import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      height: 0,
      width: 0,
      xWalk: 0,
      yWalk: 0,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(e) {
    const walk = 200;
    this.setState({
      x: e.screenX,
      y: e.screenY,
      height: window.innerHeight,
      width: window.innerWidth,
      xWalk: '',
      yWalk: '',
    });
    const xWalk = Math.round(
      (this.state.x / this.state.width) * walk - walk / 2,
    );
    const yWalk = Math.round(
      (this.state.y / this.state.height) * walk - walk / 2,
    );
    this.setState({
      xWalk,
      yWalk,
    });
  }
  render() {
    const styles = {
      trippy: {
        textShadow: `${this.state.xWalk * -1}px ${
          this.state.yWalk
        }px 0px hotpink,
        ${this.state.xWalk}px ${this.state.yWalk * -1}px 0px blue,
        ${this.state.yWalk}px ${this.state.xWalk * -1}px 0px lightgreen,
        ${this.state.yWalk * -1}px ${this.state.xWalk}px 0px yellow`,
        fontSize: '5em',
        transform: `translate3d${this.state.yWalk / 15}deg)`,
      },
    };
    console.log(this.state);
    return (
      <div className='wrapper' onMouseMove={this.onMouseMove}>
        <h1 style={styles.trippy}>trippy!!!</h1>
      </div>
    );
  }
}

export default Name;
