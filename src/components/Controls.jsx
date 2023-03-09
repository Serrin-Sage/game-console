const Controls = () => {
  return (
    <div className="controls-container">
      <div className="d-pad-container">
        <div className="up-btn direction" id="up">
          <div>W</div>
        </div>
        <div className="center direction">
          <div className="center-circle"></div>
        </div>
        <div className="down-btn direction" id="down">
          <div>S</div>
        </div>
        <div className="right-btn direction" id="right">
          <div>D</div>
        </div>
        <div className="left-btn direction" id="left">
          <div>A</div>
        </div>
      </div>
      <div className="button-container">
        <div className="button-content">
          <div className="button" id="button-1">
        
          </div>
          <div className="button" id="button-2">

          </div>
        </div>
        <div className="button-text">
          <div>
            J
          </div>
          <div>
            K
          </div>
        </div>
      </div>
    </div>
  )
}

export default Controls