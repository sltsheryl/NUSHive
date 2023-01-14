import Card from 'react-bootstrap/Card';
const Post = ({ post }) => {
    const titleStyle = {
        fontSize: "24px",
        align: "left",
        textDecoration:"none"    }

  return (
    <div>
          <Card className="mx-4 " body>
              <a href="/" style={titleStyle}>{post.title}</a>
      {/* <p>{post.date}</p> */}
      {/* number of replies */}
      <p>Replies: {post.replies.split(" ").length}</p>
          </Card>
      
    </div>
  );
};

export default Post;
