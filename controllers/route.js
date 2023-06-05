let leaderboard = {
    "Users": [
        {"id": 1, "name": "TEST", "score": 10},
        {"id": 2, "name": "Example", "score": 5},
        {"id": 3, "name": "bob", "score": 7}
    ]
}

export const getLeaderboard = (req, res) => {
    res.send( leaderboard )
}

export const submitScore = (req, res) => {
    const newScore = req.body

    leaderboard.Users.push(newScore)
    res.send("SCORE SUBMITTED")
}   