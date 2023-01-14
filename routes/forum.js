var express = require('express');
var router = express.Router();
var { db } = require('../database/database'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req) {
        db.all(`SELECT Post.id, title, description, tags, score, username, date
        FROM Post 
        JOIN User ON user_id = user.id 
        ORDER BY score DESC`, (err, posts) => {
            if (err) {
                console.log(err);
                res.status(500).send();
            } else {
                db.all(`SELECT post_id, description, score, username, date
                FROM Reply
                JOIN User ON user_id = user.id 
                ORDER BY score DESC`, (err, replies) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                    } else {
                        for (let i = 0; i < posts.length; i++) {
                            posts[i].replies = [];
                            for (let j = 0; j < replies.length; j++) {
                                if (replies[j].post_id == posts[i].id) {
                                    posts[i].replies.push(replies[j]);
                                }
                            }
                        }
                        res.status(200).json({"posts" : posts});
                    }
                });
            }
        });
    }
});

router.post("/", function(req, res, next) {
    const { title, description, tags } = req.body;
    const user_id = req.session.user_id;
    if ( user_id ) {
        const insert_post = db.prepare('INSERT INTO Post(title, description, tags, user_id) VALUES (?, ?, ?, ?)')
        insert_post.run([title, description, tags, user_id]);
        insert_post.finalize(); 
        res.status(200).send({success: true, message: "Post made"});
    } else {
        res.status(200).send({success: false, message: "Login to make post"});
    }
});

module.exports = router;
