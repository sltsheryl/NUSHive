const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database/database.db')

db.all(`SELECT title, description, tags, score, username 
FROM Post 
JOIN User ON user_id = User.id
ORDER BY score DESC`, (err, rows) => {
    console.log(rows);
    console.log(err);
});

db.close()
