const Controls = () => {
  return (
    <div className="controls-container">
      <div className="d-pad-container">
        <div>
          <div className="up-btn direction" id="up">
            <div>W</div>
            <div className="up-shadow"></div>
          </div>
          <div className="center direction">
          </div>
          <div className="down-btn direction" id="down">
            <div>S</div>
          </div>
        </div>
        <div className="left-right-btns">
          <div className="right-btn direction" id="right">
            <div className="direction-btn">D</div>
          </div>
          <div className="center direction">
            <div className="center-circle"></div>
          </div>
          <div className="left-btn direction" id="left">
            <div className="direction-btn">A</div>
          </div>
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