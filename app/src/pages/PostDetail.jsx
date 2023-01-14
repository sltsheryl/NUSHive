import Card from 'react-bootstrap/Card';
import Reply from '../components/forum/Reply';
import { useParams } from "react-router-dom";
import { useState } from 'react';

const PostDetail= () => {
  const params = useParams();
  const [post, setPost] = useState({replies: [], title: "", id: params.id});

  fetch('/post/' + post.id, {
    method: 'GET',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    try {
        res.json().then(value => {
            if (value.result == "success"){
                setPost(value.post);
            } else {
                setPost({replies: [], title: "Post not found", id: 0});
            }
        })
    } catch (err){
        throw err;
    }
});

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

                      
          </Card>
      
    </div>
  );
};

export default PostDetail;
