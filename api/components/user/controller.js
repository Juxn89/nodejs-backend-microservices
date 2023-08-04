const nanoid = require('nanoid')
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

		const upsert = (body) => {
			const user = {
				id: body.id ?? nanoid(),
				name: body.name
			}

			return store.upsert(TABLE_NAME, user)
		}

    return {
        list,
        get,
				upsert
    }
}