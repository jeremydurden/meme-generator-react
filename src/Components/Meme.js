function Meme() {
  return (
    <main className="meme-container">
      <form action="" className="meme--form">
        <div className="meme--flexform">
          <input type="text" className="meme--input" placeholder="Top Text" />
          <input
            type="text"
            className="meme--input"
            placeholder="Bottom Text"
          />
          <button className="meme--button">Get a new meme image 🖼</button>
        </div>
      </form>
    </main>
  );
}

export default Meme;
