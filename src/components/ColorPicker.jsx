const ColorPicker = () => {
  return (
    <div className="color-picker-container">
        <form className="color-picker" action="">
            <fieldset>
                <legend className="visually-hidden">Pick a color scheme</legend>
                <label for="light" className="visually-hidden">Light</label>
                <input type="radio" name="theme" id="light" ></input>

                <legend className="visually-hidden">Pick a color scheme</legend>
                <label for="light" className="visually-hidden">Red</label>
                <input type="radio" name="theme" id="red" ></input>

                <legend className="visually-hidden">Pick a color scheme</legend>
                <label for="light" className="visually-hidden">Blue</label>
                <input type="radio" name="theme" id="blue" ></input>
            </fieldset>
        </form>
    </div>
  )
}

export default ColorPicker