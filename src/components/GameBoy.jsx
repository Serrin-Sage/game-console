import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { turnOn, turnOff } from '../features/powerCheck.js'
import { deactiveTitle } from '../features/titleTransition.js'
import UIFx from 'uifx'

import Screen from './Screen.jsx'
import Controls from './Controls.jsx'

const GameBoy = () => {
  const powerStatus = useSelector((state) => state.power.value.status)
  const dispatch = useDispatch()
  const turnOnSound = new UIFx({asset: ""})

  const removeScripts = () => {
    const script = document.getElementsByClassName("snake-script")
    console.log(script)
  }
  const handlePowerOn = () => {
    if (powerStatus === false) {
      dispatch(turnOn({status: true}))
      // turnOnSound.play
    } else {
      dispatch(turnOff())
      dispatch(deactiveTitle())

      removeScripts()
    }
  }
  return (
    <div className="game-boy">
        <div className={powerStatus ? 'on-switch' : 'off-switch'} onClick={() => handlePowerOn()}>

        </div>
        <div className="game-boy-frame">
          <div className="top-frame">
            <div className='left-bevel'>

            </div>
            <div className='middle-frame'>
              <div className='middle-frame-lines'>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className='on-off-title'>
                {'<- OFF - ON ->'}
              </div>
            </div>
            <div className='right-bevel'>

            </div>
          </div>
          <Screen />
          <Controls />
          <div className="top-shadow">

          </div>
          <div className="bottom-shadow">

          </div>

        </div>
    </div>
  )
}

export default GameBoy