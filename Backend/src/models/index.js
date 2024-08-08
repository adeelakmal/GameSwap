const User = require('./users')
const Game = require ('./games')
const UserGame = require('./userGame')

User.belongsToMany(Game, { through: UserGame, as: 'ownedGames', foreignKey: 'userId' });
Game.belongsToMany(User, { through: UserGame, as: 'users', foreignKey: 'gamesId' });

module.exports = {
    User, 
    Game,
    UserGame
}