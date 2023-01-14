const Post = ({ post }) => {
  const cardStyle = {
    border: "1px solid black",
    margin: "10px 50px 10px 50px",
  };
  const titleStyle = {
    textalign: "left",
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{post.title}</h2>
      {/* <p>{post.date}</p> */}
      {/* number of replies */}
      <p>Replies: {post.replies.split(" ").length}</p>
    </div>
  );
};

export default Post;
