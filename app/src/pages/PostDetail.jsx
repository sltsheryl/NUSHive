import Card from "react-bootstrap/Card";
import Reply from "../components/forum/Reply";
import Button from "react-bootstrap/Button";

const PostDetail = ({ post }) => {
  const repliesToDisplay = [];
  const replies = post.replies;
  for (var i = 0; i < replies.length; i++) {
    repliesToDisplay.push(<Reply reply={replies[i]} />);
  }
  return (
    <div>
      <Card className="mx-4 " body>
        <h3>{post.title}</h3>
        <p className="d-inline">By {post.id}</p>

        {repliesToDisplay}

        <div class="form-group">
          <label> Reply</label>

          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <Button className="mt-2" variant="success">
            Submit{" "}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PostDetail;
