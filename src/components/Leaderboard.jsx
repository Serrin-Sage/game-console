import { useEffect, useState } from "react"
import Papa from "papaparse"

const Leaderboard = () => {

  const [leaderboardList, setLeaderBoardList] = useState([])

  const sortLeaderboard = (score) => {
    const sortScore = {
      score: (a,b) => b.score - a.score
    }
    const sortedArray = [...leaderboardList].sort(sortScore[score])
    return sortedArray
  }

  useEffect(() => {
    const getLeaderboard = () => {
      Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTomYK27rYHRe0giAFYP7C07UzhvMf0Pwu2iuVNuU6m6cmYVXQy8QnXAQ0bRDxcsr_fTIqO3pSL-yQM/pub?output=csv", {
        download: true, 
        header: true,
        complete: (results) => {
          const sortedData = results.data.sort((a,b) => b.score - a.score)
          setLeaderBoardList(sortedData)
          
        }
      })
    }

    getLeaderboard()
  },[])

  
  
  return (
    <div className="leaderboard-content">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardList.map((user) => {
              return (
                <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.score}</td>
                    </tr>
                )
              })}
          </tbody>
        </table>
    </div>
  )
}

export default Leaderboard