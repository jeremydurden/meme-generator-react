import { useState } from "react";

import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  console.log(meme, "meme");

  return (
    <main className="meme--container">
      <div action="" className="meme--form">
        <div className="meme--flexform">
          <input
            type="text"
            className="meme--input"
            placeholder="Top Text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            className="meme--input"
            placeholder="Bottom Text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
          <button onClick={getMemeImage} className="meme--button">
            Get a new meme image 🖼
          </button>
        </div>
      </div>
      <div className="meme--image__container">
        <img className="meme--image" src={`${meme.randomImage}`} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
