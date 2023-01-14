import Post from "./Post";
const ForumBody = ({ postlist }) => {
  return (
    <div>
      {postlist.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default ForumBody;
