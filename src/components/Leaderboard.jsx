import { useEffect, useState } from "react"
const Leaderboard = () => {

  const [leaderboardList, setLeaderBoardList] = useState([])

  useEffect(() => {
      const fetchLeaderBoard = async () => {
        try {
            const response = await fetch("https://serrin-sage.github.io/snake_game_data/leaderboard.json");
            const data = await response.json();
            const sortedData = data.Users.sort((a, b) => b.score - a.score);
            setLeaderBoardList(sortedData);
          } catch (error) {
            console.log("Error fetching leaderboard: ", error);
          }
      }

      fetchLeaderBoard()
  },[])

  
  
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