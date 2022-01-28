import PropTypes from "prop-types";
import Avatar from "./Avatar";
import "./Tweet.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Tweet(props) {
  const { user, createdOn, children } = props;
  // {/* <div className="tweet" style={ marginBottom: "20px" }}> */}
  return (
    <div className="tweet">
      <Avatar name={user} />
      <div>
        <div className="tweet-header">
          <span className="tweet-user">@{user}</span> -{" "}
          {/* <span className="tweet-created-on">{createdOn}</span> */}
          <span className="tweet-created-on">{dayjs(createdOn).fromNow()}</span>
        </div>
        <div className="tweet-content">{children}</div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  user: PropTypes.string,
  createdOn: PropTypes.string,
};

export default Tweet;
