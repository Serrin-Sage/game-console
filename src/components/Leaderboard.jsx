import { useEffect, useState } from "react"
import axios from "axios"

const Leaderboard = () => {

  const [leaderboardList, setLeaderBoardList] = useState([])

  // useEffect(() => {
  //     const fetchLeaderBoard = async () => {
  //       try {
  //           const response = await fetch("https://serrin-sage.github.io/snake_game_data/leaderboard.json");
  //           const data = await response.json();
  //           const sortedData = data.Users.sort((a, b) => b.score - a.score);
  //           setLeaderBoardList(sortedData);
  //         } catch (error) {
  //           console.log("Error fetching leaderboard: ", error);
  //         }
  //     }

  //     fetchLeaderBoard()
  // },[])

  useEffect(() => {
    getLeaderboard()
  }, [])
  
  const getLeaderboard = async () => {
    const response = await axios.get("http://localhost:5000/leaderboard")
    const data = response.data
    if (response.status === 200) {
      const sortedData = data.Users.sort((a, b) => b.score - a.score);
      setLeaderBoardList(sortedData)
    } else {
      // console.log(response)
    }
  }
  
  return (
    <div>
        Leaderboard
        {leaderboardList.map((user) => {
            return (
                <div key={user.id}>
                    {user.name}
                    {user.score}
                </div>
            )
        })}
    </div>
  )
}

export default Leaderboard