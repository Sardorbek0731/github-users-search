// CSS
import "./App.css";

// Components
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import User from "./components/user/User";

// Hooks
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <div className={mode ? "App dark" : "App"}>
      <div className="container flex column justifyBetween wf-100 hf-100">
        <div className="smallSections">
          <Header mode={mode} setMode={setMode} />
          <Search />
        </div>
        <User />
      </div>
    </div>
  );
}

export default App;
