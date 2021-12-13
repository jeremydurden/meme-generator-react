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
    let random = Math.floor(Math.random() * allMemeImages.data.memes.length);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: allMemeImages.data.memes[random].url,
    }));
  }
  return (
    <main className="meme--container">
      <div action="" className="meme--form">
        <div className="meme--flexform">
          <input type="text" className="meme--input" placeholder="Top Text" />
          <input
            type="text"
            className="meme--input"
            placeholder="Bottom Text"
          />
          <button onClick={getMemeImage} className="meme--button">
            Get a new meme image 🖼
          </button>
        </div>
      </div>
      <img className="meme--image" src={`${meme.randomImage}`} alt="" />
    </main>
  );
}

export default Meme;

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */
