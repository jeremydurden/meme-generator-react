import face from "../Images/trollFace.svg";

function Header() {
  return (
    <header className="header">
      <img className="header--image" src={face} alt="meme face" />
      <h2 className="header--title">Meme Generator</h2>
      <h3 className="header--subtitle">React Course - Project 3</h3>
    </header>
  );
}

export default Header;
