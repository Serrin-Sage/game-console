import { useEffect, useState } from "react"
import Papa from "papaparse"

const Leaderboard = () => {

  const [leaderboardList, setLeaderBoardList] = useState([])

  useEffect(() => {
    const getLeaderboard = () => {
      Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTomYK27rYHRe0giAFYP7C07UzhvMf0Pwu2iuVNuU6m6cmYVXQy8QnXAQ0bRDxcsr_fTIqO3pSL-yQM/pub?output=csv", {
        download: true, 
        header: true,
        complete: (results) => {
          setLeaderBoardList(results.data)
        }
      })
    }

    getLeaderboard()
  },[])

  
  
  return (
    <div>
        Leaderboard
        {leaderboardList.map((user) => {
            return (
                <div key={user.name}>
                    {user.name}
                    {user.score}
                </div>
            )
        })}
    </div>
  )
}

export default Leaderboard