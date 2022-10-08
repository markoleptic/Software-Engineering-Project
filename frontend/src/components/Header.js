import mainlogo from "../images/AniFindLogo.ico";

const Header = () => {
  return (
    <header className="hero">
      <div className="logo-text">
        <img className="main-logo" src={mainlogo} alt="mainlogo" />
        <h1 className="main-text">AniFind</h1>
      </div>
      <p>Anime Recommender System</p>
    </header>
  );
};

export default Header;
