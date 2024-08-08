const express =  require("express");
const { Game } = require("../models")
const router = express.Router();

//Fetch all games
router.get("/", async (req, res) =>{
    try{
        const games = await Game.findAll();
        res.json(games);

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

// Add a game
router.post("/", async (req, res) => {
    try{
        const { name, description, genre, platform, coverImage} = req.body;
        const game = await Game.create({ name, description, genre, platform, coverImage})
        res.status(201)
        .json({
            message: `${name} has been sucessfully added to list of games`,
            details: game
        })        
    }catch(err){
        if(err.name ==="SequelizeUniqueConstraintError"){
            res.status(500).json({error: "Game already exists in the system"});
        }else{
            res.status(500).json({erorr: err.message});
        }
    }
});

// Delete a game
router.delete("/", async(req, res) =>{
    try{
        const { name } = req.body;
        const gameData = await Game.destroy({where: 
            {name: name}
        });
        if(gameData === 0){
            res.status(404).json({error: `No game with name ${name} exists`})
        }
        res.status(200).json({
            message: "Game has been successfully deleted!"
        })
    }catch(err){
        res.status(500).json({error: err.message})
    }
});

// Update a game
router.put("/", async (req, res) => {
    try{
        const { id } = req.query;
        const { name, description, genre, platform, coverImage} = req.body;
        
        const game = await Game.findByPk(id);

        if(!game){
            res.status(404).json({error: `No game found with the id ${id}`})
        }

        game.name = name || game.name;
        game.description = description || game.description;
        game.genre = genre || game.genre;
        game.platform = platform || game.platform;
        game.coverImage = coverImage || game.coverImage;

        await game.save();

        res.status(200).json({
            message: `${name || game.name} has been updated successfully`,
            details: game
        })

    }catch(err){
        if (err.name === "SequelizeUniqueConstraintError") {
            res.status(500).json({error: "Game with the same name exists already"})
        }else{
            res.status(500).json({error: err.message});
        }
    }
});

module.exports = router;