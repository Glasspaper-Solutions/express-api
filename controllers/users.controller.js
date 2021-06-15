let users = [
    {"id": 1, "name": "Bjarne Betjent", "age": 5},
    {"id": 2, "name": "Max Mekker", "age": 18},
    {"id": 3, "name": "Lille My", "age": 5},
]


exports.getUsers = (req, res) => {
    res.send(users)
}

exports.addUser = (req, res) => {
    const user = req.body

    if (!user) {
        res.status(405).send('Missing user data')
    } else {
        users.push(user)
        res.send(user)
    }
}

exports.getUserById = (req, res) => {
    const paramId = req.params.id

    const user = users.find(item => item.id === parseInt(paramId))

    if(!user) {
        res.status(404).send(`We could not find item with id ${paramId}`)
    } else {
        res.send(user)
    }
}