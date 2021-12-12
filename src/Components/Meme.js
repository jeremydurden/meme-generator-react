import memesData from "../memesData";

function Meme() {
  function handleClick() {
    let random = Math.floor(Math.random() * memesData.data.memes.length);
    let memeUrl = memesData.data.memes[random].url;
    console.log(memeUrl);
  }
  return (
    <main className="meme-container">
      <div action="" className="meme--form">
        <div className="meme--flexform">
          <input type="text" className="meme--input" placeholder="Top Text" />
          <input
            type="text"
            className="meme--input"
            placeholder="Bottom Text"
          />
          <button onClick={handleClick} className="meme--button">
            Get a new meme image 🖼
          </button>
        </div>
      </div>
    </main>
  );
}

export default Meme;
