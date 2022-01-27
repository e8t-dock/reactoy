import PropTypes from "prop-types";
import Tweet from "./Tweet.jsx";
import "./Timeline.css";

function Timeline({ tweets }) {
  console.log(tweets);
  return (
    <ul className="timeline">
      {tweets
        .sort((o, n) => new Date(n.created_on) - new Date(o.created_on))
        .map(({ id, user, created_on, content }) => (
          <li key={id} className="timeline-item">
            <Tweet key={id} user={user} createdOn={created_on}>
              {content}
            </Tweet>
          </li>
        ))}
    </ul>
  );
}

Timeline.propType = {
  tweets: PropTypes.array,
};

export default Timeline;
