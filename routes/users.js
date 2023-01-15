var express = require("express");
var router = express.Router();
var { db } = require("../database/database");

const bcrypt = require("bcrypt");
const saltRounds = 12;

router.post("/login", function (req, res) {
  const { email, password, remember } = req.body;
  db.all(
    "SELECT id, username, password_hash FROM User WHERE Email = (?)",
    [req.body.email],
    function (err, users) {
      if (err) {
        console.log(err.stack);
        res.status(500).send();
      } else if (users.length != 1) {
        res.status(200).send({ success: false, message: "Invalid email" });
      } else {
        const { id, username, password_hash } = users[0];
        bcrypt.compare(
          req.body.password,
          password_hash,
          function (err, res_bcrypt) {
            if (err || !res_bcrypt) {
              console.log(err.stack);
              res
                .status(200)
                .json({ success: false, message: "Wrong password" });
            } else {
              let options = {
                maxAge: 1000 * 60 * 99, // would expire after 15 minutes
              }
              //req.session.user_id = 1;
              // Set cookie
              res.cookie('user_id', id, options) // options is optional
              //res.set('Set-Cookie', `user_id=${id}`)

              res.status(200).json({ success: true, message: "Login success" });
              //res.send('')
            }
          }
        );
      }
    }
  );
});

router.post("/register", function (req, res) {
  const { email, username, password } = req.body;
  db.all(
    "SELECT id, username, password_hash FROM User WHERE Email = (?) OR Username = (?)",
    [email, username],
    function (err, users) {
      if (err) {
        console.log(err.stack);
        res.status(500).send();
      } else if (users.length != 0) {
        res
          .status(200)
          .send({
            success: false,
            message: "User with email or username already exists",
          });
      } else {
        bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
          if (err) {
            console.log(err.stack);
            res.status(500).send();
          } else {
            const insert_user = db.prepare(
              "INSERT INTO User(username, email, password_hash) VALUES (?, ?, ?)"
            );
            insert_user.run([username, email, hashedPassword]);
            insert_user.finalize();
            res
              .status(200)
              .send({ success: true, message: "Registration successful" });
          }
        });
      }
    }
  );
});

router.get("/profile", function (req, res) {
  const user_id = req.cookies["user_id"]
  console.log(user_id)
  if (user_id) {
    db.all(`SELECT username, email, tags 
    FROM User WHERE User.id == (?)`, [user_id], function (err, user) {
      if (err) {
        console.log(err.stack);
        res.status(500).send();
      } else if (user.length != 1) {
        res.status(200).send({ success: false, message: "Invalid user" });
      } else {
        const { username, email, tags } = user[0];
        var count = 0;
        db.all(`SELECT value FROM PostVote 
        JOIN Post ON PostVote.post_id = Post.id
        WHERE Post.user_id = (?)`, [user_id], function (err, postvote) {
          if (err) {
            console.log(err.stack);
            res.status(500).send();
          } else {
            for (let i = 0; i < postvote; i++) {
              count += postvote[i].value;
            }
            db.all(`SELECT value FROM ReplyVote 
            JOIN Reply ON ReplyVote.reply_id = Reply.id
            WHERE Reply.user_id = (?)`, [user_id], function (err, postvote) {
              if (err) {
                console.log(err.stack);
                res.status(500).send();
              } else {
                for (let i = 0; i < postvote; i++) {
                  count += postvote[i].value;
                }
                res.send({username: username, email: email, tags: tags, points: count, teaching_feedback: count/10});
              }
            })
          }
        })
      }

    });
  } else {
    res.send({success: false, message: "Login to go to profiles."})
  }

});

module.exports = router;
