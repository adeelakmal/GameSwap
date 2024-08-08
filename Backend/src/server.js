const app = require('./app');
const sequelize = require('./config/db')

const PORT = process.env.PORT || 3000

sequelize.sync({ force: false })
.then(() => {
    console.log("Database has been synced");
    app.listen(PORT, () => {
        console.log(`Server running on localhost:${PORT}`);
    })
})
.catch((err) => console.log("Could not synchronize database:", err));