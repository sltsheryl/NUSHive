import Card from 'react-bootstrap/Card';
import replies from "../../images/replies.png";
import Button from 'react-bootstrap/Button';

const Post = ({ post }) => {
    const titleStyle = {
        color: "#292929",
        fontSize: "24px",
        textDecoration: "none"
    }

    const tagsDisplay = [];
    const tags = post.tags.split(" ")
    for (var i=0; i < tags.length; i++) {
        tagsDisplay.push(
                <Button className="text-xs me-1 mt-1 rounded" variant="outline-primary">{tags[i]}</Button>
        );
    }


  return (
    <div>
          <Card className="mx-4 " body>
              <a href=" " style={titleStyle}>{post.title}</a>
              <div>
          <p className="my-1 d-inline" >By {post.id}</p>
            <div className="d-inline mx-4 replies">
               <img alt="replies" height="20px" src={replies} />
              <p className="ms-1 d-inline">{post.replies.length}</p>
          </div>
          
                  <p className="my-1  ">{post.date}</p>
              </div>
            
         
              <div className="row partners-images">
                  <div >{ tagsDisplay }</div>
                </div>
           
             
             
      </Card>
      
    </div>
  );
};

export default Post;
