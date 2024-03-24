// CSS
import "./App.css";

// Components
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import User from "./components/user/User";

function App() {
  return (
    <div className="App flex justifyBetween column">
      <div className="smallSections">
        <Header />
        <Search />
      </div>
      <User />
    </div>
  );
}

export default App;
