const Screen = ({ powerOn }) => {
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
            <div className={powerOn ? "power-on" : "power-off"}>

            </div>
            <span>BATTERY</span>
          </div>
          <div className={powerOn ? "screen-display-on" : "screen-display-off"}>

          </div>
        </div>
        <div className="screen-shadow">

        </div>
    </div>
  )
}

export default Screen