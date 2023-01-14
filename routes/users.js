var express = require("express");
var router = express.Router();
var { db } = require("../database/database");

const bcrypt = require("bcrypt");
const saltRounds = 12;

router.post("/login", function (req, res, next) {
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
              req.session.username = username;
              req.session.user_id = id;
              if (remember) {
                req.session.cookie.expires = new Date(Date.now() + 2628000000);
                req.session.cookie.maxAge = 2628000000;
              }
              res.status(200).json({ success: true, message: "Login success" });
            }
          }
        );
      }
    }
  );
});

router.post("/register", function (req, res, next) {
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

router.get("/score", function (req, res, next) {});

module.exports = router;
