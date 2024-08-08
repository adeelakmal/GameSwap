const express = require('express');
const { User, Game, UserGame } = require("../models");
const router = express.Router() 

// Fetch all user games
router.get('/', async (req, res) =>{
    try{
        const { userId } = req.query;
        console.log(userId)
        const user = await User.findByPk(userId, {
            include:[{
                model: Game,
                as: 'ownedGames'
            }]
        });

        if (!user){
            throw new Error('User not found');
        }

        res.json({
            message: "Follwoing games belong to the user",
            games: user.ownedGames
        });
    }catch(err){
        res.status(500).json({error: err.message})
    }
})

// Add a game to user collection
router.post("/", async (req, res) =>{
    const { userId, gameId } = req.body;
    try{
        if (!userId && !gameId){
            throw new Error('Provide a userId and gameId');
        }
        const result = await UserGame.create({
            userId: userId,
            gamesId: gameId
        })
        res.json({
            message: "Game has been added to user collection",
            userGame: result
        });
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router