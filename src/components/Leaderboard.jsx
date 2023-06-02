import { useEffect, useState } from "react"
const Leaderboard = () => {

  const [leaderboardList, setLeaderBoardList] = useState([])

  useEffect(() => {
      const fetchLeaderBoard = () => {
        fetch("http://localhost:3000/Users")
        .then(res => res.json())
        .then((data) => {
            const sortedData = data.sort((a, b) => b.score - a.score)
            setLeaderBoardList(sortedData)
        })
        .catch(error => {
            console.log("Error fetching leaderboard: ", error)
        })
      }

      fetchLeaderBoard()
  },[])

  
  
  return (
    <div>
        Leaderboard
        {leaderboardList.map((user) => {
            return (
                <div>
                    {user.name}
                    {user.score}
                </div>
            )
        })}
    </div>
  )
}

export default Leaderboard