import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import tweets from "./tweets.json";
import Tweet from "./Tweet";
import ComposeForm from "./ComposeForm";
import Timeline from "./Timeline";
import { FaTwitter } from "react-icons/fa";
import { nanoid } from "nanoid";

import initialTweets from "./tweets.json";

const CURRENT_USER = "anyone";

function App() {
  const [tweets, setTweets] = useState(initialTweets);

  const handlePostTweet = (content) => {
    const newTweet = {
      content,
      id: nanoid(),
      created_on: Date(Date.now()),
      user: CURRENT_USER,
      comments_count: 0,
      retweets_count: 0,
      favorites_count: 0,
    };
    // 配合 flex-end
    setTweets([...tweets, newTweet]);
  };
  return (
    <div className="app">
      <FaTwitter className="app-logo" size="2em" />
      <ComposeForm onSubmit={handlePostTweet} />
      <div className="sparator"></div>
      <Timeline tweets={tweets} />
    </div>
  );
}

function AppV1() {
  return (
    <div className="timeline">
      {tweets.map(({ id, user, created_on, content }) => (
        <Tweet key={id} user={user} createdOn={created_on}>
          {content}
        </Tweet>
      ))}
    </div>
  );
}

function AppOld() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
