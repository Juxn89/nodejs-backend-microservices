const db = {
    'users': [
        { id: 1, name: 'Juan' }
    ]
};

const list = async (table) => { 
    return db[table]
}

const get = async (table, id) => { 
    const collections = await list(table)
    return collections.find(item => item.id === id) || null;
}

const upsert = async (table, data) => { 
    db[table].push(data) 
}

const remove = async (table, id) => { 
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}