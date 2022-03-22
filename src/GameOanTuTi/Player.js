import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="xuXi">
                    <img
                        className="pt-3"
                        width={100}
                        src={this.props.mangTuTi.find(item=>item.datCuoc===true).hinhAnh}
                        alt={this.props.mangTuTi.find(item=>item.datCuoc===true).hinhAnh}
                    />
                </div>
                <div className="speech-bubble"></div>
                <img
                    style={{ width: 180, height: 180 }}
                    src="./img/gameOanTuTi/player.png"
                    alt="./img/gameOanTuTi/player.png"
                />
                <div className="row">
                    {this.props.mangTuTi.map((item) => {
                        let border = {};
                        if(item.datCuoc){
                            border = {border:'3px solid orange'}
                        }     
                        return (
                            <div className="col-4">
                                <button style={border} className="rounded" onClick={()=>{
                                    let action ={
                                        type:'DAT_CUOC',
                                        maCuoc: item.ma
                                    }
                                    this.props.dispatch(action);
                                }}>
                                    <img width={45} src={item.hinhAnh} alt={item.hinhAnh} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        mangTuTi: state.OanTuTiReducer.mangTuTi,
    };
};
export default connect(mapStateToProps)(Player);
