const getUsers = (req, res, next) => {
    res.send('users')
}

const createNewUser = (req, res, next) => {
    res.send('create new user')
}

const deleteUser = (req, res, next) => {
    res.send(`delete user with id # ${req.params.id}`)
}

const updateUser = (req, res, next) => {
    res.send(`update user with id # ${req.params.id}`)
}

module.exports = {
    getUsers,
    createNewUser,
    deleteUser,
    updateUser
}