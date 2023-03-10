const MainTitle = () => {

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      console.log("EVENT LISTENER")
      window.removeEventListener("keydown", handleEnter)
    }
  }

  window.addEventListener("keydown", handleEnter)

  return (
    <div className="main-title">
        Hello
    </div>
  )
}

export default MainTitle