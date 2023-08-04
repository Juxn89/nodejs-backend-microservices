const store = require('../../../store/dummy');

const TABLE_NAME = 'users'

const list = () => {
    return store.list(TABLE_NAME)
}

module.exports = {
    list
}