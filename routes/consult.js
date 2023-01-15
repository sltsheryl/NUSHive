var express = require("express");
var router = express.Router();
var { db } = require("../database/database");

router.get("/", function (req, res, next) {
  const user_id = req.session.user_id;
  if (user_id) {
    const { title, description, tags } = req.body;
    const insert_post = db.prepare(
      "INSERT INTO Post(title, description, tags, user_id) VALUES (?, ?, ?, ?)"
    );
    insert_post.run([title, description, tags, user_id]);
    insert_post.finalize();
    res.status(200).send({ success: true, message: "Post made" });
  } else {
    res
      .status(200)
      .send({ success: false, message: "Login to view your consultation" });
  }
});

router.post("/request", function (req, res, next) {
  const user_id = req.session.user_id;
  if (user_id) {
    const { starttime, endtime, description, tags } = req.body;
    const insert_consultrequest = db.prepare(
      "INSERT INTO ConsultRequest(consultor_id, starttime, endtime, description, tags) VALUES (?, ?, ?, ?, ?)"
    );
    insert_post.run([user_id, starttime, endtime, description, tags]);
    insert_post.finalize();
    res.status(200).send({ success: true, message: "Post made" });
  } else {
    res.status(200).send({
      success: false,
      message: "Login to view make consultation request",
    });
  }
});

router.post("/accept", function (req, res, next) {
  const user_id = req.session.user_id;
  if (user_id) {
    const { title, description, tags } = req.body;
    const insert_post = db.prepare(
      "INSERT INTO Post(title, description, tags, user_id) VALUES (?, ?, ?, ?)"
    );
    insert_post.run([title, description, tags, user_id]);
    insert_post.finalize();
    res.status(200).send({ success: true, message: "Post made" });
  } else {
    res
      .status(200)
      .send({ success: false, message: "Login to view your consult" });
  }
});

module.exports = router;
