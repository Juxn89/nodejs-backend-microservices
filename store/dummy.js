const db = {
    'users': [
        { id: 1, name: 'Juan' }
    ]
};

const list = (table) => { 
    return db[table]
}

const get = (table, id) => { 
    let collections = list(table)
    return collections.find(item => item.id === id)[0] || null;
}

const upsert = (table, data) => { 
    db[table].push(data) 
}

const remove = (table, id) => { 
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}