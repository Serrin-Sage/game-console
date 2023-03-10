import { useSelector, useDispatch } from "react-redux"
import { activeTitle } from "../features/titleTransition"

const MainTitle = () => {

  const dispatch = useDispatch()

  const handleEnter = (event) => {
    if (event.key === "j") {
      dispatch(activeTitle({status: true}))
      window.removeEventListener("keydown", handleEnter)
    }
  }

  window.addEventListener("keydown", handleEnter)

  return (
    <div className="main-title">
        WELCOME
    </div>
  )
}

export default MainTitle