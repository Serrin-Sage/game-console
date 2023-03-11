import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import MainTitle from "./MainTitle"
import MainScreen from "./MainScreen"
import SnakeDisplay from "./SnakeDisplay"

const Screen = () => {

  const powerStatus = useSelector((state) => state.power.value.status)
  const titleStatus = useSelector((state) => state.title.value.status)
  
  return (
    <div className="screen-container">
        <div className="screen-header">
          <div className="screen-header-lines" id="left-header-lines">
            <div></div>
            <div></div>
          </div>
          <div className="screen-header-title">
            DOT MATRIX WITH STEREO SOUND
          </div>
          <div className="screen-header-lines" id="right-header-lines">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="screen-content">
          <div className="power-container">
            <div className={powerStatus ? "power-on" : "power-off"}>

            </div>
            <span>BATTERY</span>
          </div>
          <div className={powerStatus ? "screen-display-on" : "screen-display-off"}>
            {/* {powerStatus && titleStatus === false ? <MainTitle /> : null }
            {titleStatus ? <MainScreen /> : null } */}

            {powerStatus ? <SnakeDisplay /> : null}
          </div>
        </div>
        <div className="screen-shadow">

        </div>
    </div>
  )
}

export default Screen