var { db } = require("./database");

db.serialize(() => {
  db.run(`CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL, 
    password_hash TEXT NOT NULL,
    tags TEXT
  )`);

  db.run(`CREATE TABLE Post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT, 
    description TEXT, 
    user_id INTEGER,
    tags TEXT,
    score INTEGER DEFAULT 0,
    date DATE,

    FOREIGN KEY (user_id) REFERENCES User(id))`);

  db.run(`CREATE TABLE Reply (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    user_id INTEGER,
    post_id INTEGER,
    score INTEGER DEFAULT 0,
    date DATE,

    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (post_id) REFERENCES Post(id))`);

  db.run(`CREATE TABLE PostVote (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    post_id INTEGER,
    value INTEGER,

    FOREIGN KEY (user_id) REFERENCES User(id), 
    FOREIGN KEY (post_id) REFERENCES Post(id)
  )`);

  db.run(`CREATE TABLE ReplyVote (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    reply_id INTEGER,
    value INTEGER,

    FOREIGN KEY (user_id) REFERENCES User(id), 
    FOREIGN KEY (reply_id) REFERENCES Reply(id)
  )`);

  db.run(`CREATE TABLE ConsultRequest (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    consultor_id INTEGER NOT NULL,
    starttime DATETIME NOT NULL,
    endtime DATETIME NOT NULL,
    description TEXT,
    tags TEXT,

    FOREIGN KEY (consultor_id) REFERENCES User(id)
  )`);

  db.run(`CREATE TABLE ConsultAccept (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    consultrequest_id INTEGER NOT NULL, 
    consultant_id INTEGER NOT NULL,
    consultor_review INTEGER,
    consultant_review INTEGER,

    FOREIGN KEY (consultrequest_id) REFERENCES ConsultRequest(id),
    FOREIGN KEY (consultant_id) REFERENCES User(id)
  )`);

  db.run(`CREATE TABLE Module (
    code STRING PRIMARY KEY
  )`);

  db.run(`CREATE TABLE Completion(
    user_id INTEGER,
    module_code STRING,
    distinction BOOLEAN,

    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (module_code) REFERENCES Module(code)
  )`);
});

// db.serialize(() => {

//   const insert_user = db.prepare('INSERT INTO User(username, email, password_hash) VALUES (?, ?, ?)')
//   const username = "Jikun", email = "test@gmail.com", password_hash = "test";
//   insert_user.run([username, email, password_hash]);

//   insert_user.finalize();

//   const insert_post = db.prepare('INSERT INTO Post(title, description, user_id) VALUES (?, ?, ?)')
//   const title = "Help", description = "Dying in cs3233", user_id = "1";
//   insert_post.run([title, description, user_id]);
//   insert_post.finalize()
// })

db.close();
