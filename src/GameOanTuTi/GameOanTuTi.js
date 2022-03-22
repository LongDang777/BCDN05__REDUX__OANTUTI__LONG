import React, { Component } from 'react'
import '../asset/style/GameOanTuTi.css'
import KetQua from './KetQua'
import PcPlay from './PcPlay'
import Player from './Player'
import { connect } from 'react-redux'

class GameOanTuTi extends Component {



  render() {
    return (
      <div className='gameOTT'>
        <div className="row mt-3 text-center">
          <div className="col-4">
            <Player/>
          </div>
          <div className="col-4">
            <KetQua/>
            <button className='btn btn-success p-2' onClick={()=>{
              let count = 0;
              let randomItem = setInterval(()=>{
                let action = {
                  type: 'PLAY_GAME',
                }
                this.props.dispatch(action);
                count++;
                if(count >10){
                  clearInterval(randomItem)
                  let actionPlay = {
                    type: 'END_GAME'
                  }
                  this.props.dispatch(actionPlay);
                }
              },100);
            }} >Play Game</button>
          </div>
          <div className="col-4">
            <PcPlay/>
          </div>
        </div>  
      </div>
    )
  }
}
export default connect()(GameOanTuTi)