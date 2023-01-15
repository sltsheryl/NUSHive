import Card from 'react-bootstrap/Card';
import Reply from '../components/forum/Reply';
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useState } from 'react';

const PostDetail= () => {
  const params = useParams();
  const [post, setPost] = useState({ replies: [], title: "", description: "", score: 0, username: "", date: null, id: params.id, response: false});
  if (post.response == false) {
    fetch('/forum/post/' + post.id).then(res => {
      try {
          res.json().then(value => {
              if (value.result == "success"){
                  setPost({replies: value.replies, title: value.title, description: value.description, score: value.score, username: value.username, date: value.date, id: params.id, response: true});
              } else {
                  setPost({replies: [], title: "Post not found", description: "", score: 0, username: "", date: null, id: params.id, response: true});
              }
          })
      } catch (err){
          throw err;
      }
    });
  }

const repliesToDisplay = [];
    const replies = post.replies
    for (var i=0; i < replies.length; i++) {
        repliesToDisplay.push(
                <Reply reply={replies[i]} />
        );
    }
  return (
    <div>
          <Card className="mx-4 " body>
              <h3>{post.title}</h3>
              <p className="d-inline">By {post.id}</p>
              
            {repliesToDisplay}

        <div class="form-group">
          <label> Reply</label>

          <textarea class="form-control" rows="3"></textarea>
          <Button className="mt-2" variant="success">
            Submit{" "}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PostDetail;
