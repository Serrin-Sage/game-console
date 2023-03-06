import { useState } from 'react'

import Screen from './Screen.jsx'
import Controls from './Controls.jsx'

const GameBoy = () => {

  const [powerOn, setPowerOn] = useState(false)
  
  return (
    <div className="game-boy">
        <div className={powerOn ? 'on-switch' : 'off-switch'} onClick={() => setPowerOn((current) => !current)}>

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
          <Screen powerOn={powerOn}/>
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