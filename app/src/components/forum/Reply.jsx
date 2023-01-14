import Card from "react-bootstrap/Card";
import vote from "../../images/vote.jpeg";

// reply has a text, date, user and number of votes
const Reply = ({ reply }) => {
  return (
    <div>
      <Card className="my-4 " body>
        <h5>{reply.id}</h5>
        <p className="my-1">{reply.text}</p>
        <p className="small d-inline">{reply.date}</p>

        <div className="upvotes">
          <img
            alt="vote"
            className="pb-2 me-1 d-inline"
            height="40px"
            src={vote}
          />
          <p className="d-inline">{reply.votes}</p>
        </div>
      </Card>
    </div>
  );
};

export default Reply;
