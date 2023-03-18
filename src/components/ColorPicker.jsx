const ColorPicker = () => {
  return (
    <div className="color-picker-container">
        <form class="color-picker" action="">
            <fieldset>
                <legend class="visually-hidden">Pick a color scheme</legend>
                <label for="light" class="visually-hidden">Light</label>
                <input type="radio" name="theme" id="light" checked></input>

                <legend class="visually-hidden">Pick a color scheme</legend>
                <label for="light" class="visually-hidden">Red</label>
                <input type="radio" name="theme" id="red" checked></input>

                <legend class="visually-hidden">Pick a color scheme</legend>
                <label for="light" class="visually-hidden">Blue</label>
                <input type="radio" name="theme" id="blue" checked></input>
            </fieldset>
        </form>
    </div>
  )
}

export default ColorPicker