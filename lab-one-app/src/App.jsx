import "./App.css";
import background from "./assets/discord-background.png";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img className="logo" src={logo} alt="discord logo" />
        <img className="menu" src={menu} alt="discord menu" />
      </nav>
      <div className="content">
        <section>
          <h1 className="heading">IMAGINE A PLACE...</h1>
          <p className="paragraph">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </section>

        <div className="buttons">
          <button className="btnMac">Download for Mac</button>
          <button className="btnBrowser">Open Discord in your browser</button>
        </div>
        <img className="backgroungImg" src={background} alt="background img" />
      </div>
    </div>
  );
}

export default App;
