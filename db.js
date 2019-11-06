const low = require('lowdb');
//for lowdb
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

//low db default
db.defaults({ users: [], sessions: []})
  .write();

module.exports = db;