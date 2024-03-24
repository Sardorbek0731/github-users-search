// CSS
import "./Header.css";

// Icons
import moon from "../../assets/icons/moon.png";
import sun from "../../assets/icons/sun.png";

function Header({ mode, setMode }: { mode: boolean; setMode: any }) {
  return (
    <div className="Header flex justifyBetween wf-100">
      <h2 className="logo">devfinder</h2>
      <div
        className="mode flex alignCenter"
        onClick={() => {
          setMode(!mode);
        }}
      >
        <h3>{mode ? "Light" : "Dark"}</h3>
        <img src={mode ? sun : moon} alt="Moon Logo" />
      </div>
    </div>
  );
}

export default Header;
