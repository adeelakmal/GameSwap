const express = require('express');
const { User } = require('../models')
const router = express.Router();

// Fetch all users
router.get('/', async (req, res)=>{
    try{
        const users = await User.findAll();
        res.json(users);
    }catch (err){
        res.status(500).json({ error: err.message});

    }
});

// Create new users
router.post('/', async (req, res) => {
    try{
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password})
        res.status(201)
        .json({ 
            message: "User has been successfully created!",
            user: user
        })
    }catch (err){
        if(err.name === 'SequelizeUniqueConstraintError'){
            res.status(500).json({error: "User already exists in the system"});
        }else{
            res.status(500).json({ error: err.message});
        }
    }
});

// Delete existing user
router.delete('/', async (req, res) =>{
    try{
        const { username } = req.body;
        const user = await User.destroy({where:
             {username: username}
            });
        if(user === 0){
            res.status(404).json({error: `No user with name ${username} exists`})
        }
        res.status(200).json({
            message: "User has been successfully deleted!"
        });
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

module.exports = router