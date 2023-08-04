const TABLE_NAME = 'users'

module.exports = (injectedStore) => {
    let store = injectedStore;

    if(!store)
        store = require('../../../store/dummy');

    const list = () => {
        return store.list(TABLE_NAME)
    }

    const get = (id) => {
        return store.get(TABLE_NAME, id)
    }

    return {
        list,
        get,
    }
}