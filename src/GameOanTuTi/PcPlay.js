import React, { Component } from "react";
import { connect } from "react-redux";

class PcPlay extends Component {
  render() {
    let keyFrame = `@keyframes random${Date.now()} {
      0% {top: -120px;}
      25% {top: 120px;}
      50% {top: -120px;}
      75% {top: 120px;}
      100% {top: 0;}
    }`;
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <style>{keyFrame}</style>
        <div className="xuXi" style={{ position: "relative", overflow:'hidden'}}>
          <img
            style={{
              position: "absolute",
              left: "20%",
              animation: `random${Date.now()}  linear 0.5s`,
            }}
            className="pt-3"
            width={100}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 180, height: 180 }}
          src="./img/gameOanTuTi/playerComputer.png"
          alt="./img/gameOanTuTi/player.png"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.OanTuTiReducer.computer,
  };
};

export default connect(mapStateToProps)(PcPlay);
