const { getUsers, getUserById, addUser } = require("../controllers/users.controller")
// const usersController = require("../controllers/users.controller")

module.exports = (app) => {
    app.get('/users', getUsers),
    app.get('/users/:id', getUserById),
    app.post('/users', addUser)
}