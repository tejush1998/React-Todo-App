import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputState, setInState] = useState("something");
  const [responseState, setResState] = useState("something");
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${inputState}&from=2023-12-15&sortBy=publishedAt&apiKey=e17108e18f5b429bb5bde2eac9480b34&language=en`
      );
      setResState(response);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputState]);

  return (
    <div id="root">
      <input
        type="text"
        value={inputState}
        onChange={(e) => {
          setInState(e.target.value);
        }}
      />
      <ul>
        {responseState?.data?.articles &&
          responseState.data.articles.map(
            (item, index) => index !== 5 && <li key={index}>{item.title}</li>
          )}
      </ul>
    </div>
  );
}

export default App;
