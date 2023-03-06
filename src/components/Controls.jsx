const Controls = () => {
  return (
    <div className="controls-container">
      <div className="d-pad-container">
        <div className="up-btn" id="up">
          <div>W</div>
        </div>
        <div className="center">
          <div className="center-circle"></div>
        </div>
        <div className="down-btn" id="down">
          <div>S</div>
        </div>
        <div className="right-btn" id="right">
          <div></div>
        </div>
        <div className="left-btn" id="left">
          <div></div>
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